export interface DeutschlandSearchPost {
	id: string;
}

export type DeutschlandSearchTerm = [
	term: string,
	postIndexes: number[],
	titlePostIndexes: number[],
];

export interface DeutschlandSearchIndex {
	version: 1;
	posts: DeutschlandSearchPost[];
	terms: DeutschlandSearchTerm[];
}

export interface DeutschlandSearchResult {
	postIndex: number;
	score: number;
	matchedTerms: string[];
}

const combiningMarks = /\p{M}+/gu;
const searchableWords = /[\p{L}\p{N}]+/gu;

export const normalizeSearchText = (value: string) =>
	value.normalize('NFKD').replace(combiningMarks, '').toLocaleLowerCase('en');

export const searchTokens = (value: string) =>
	[...new Set(normalizeSearchText(value).match(searchableWords) ?? [])].filter(
		(token) => token.length >= 2,
	);

const maximumDistanceFor = (term: string) => {
	if (term.length <= 2) return 0;
	if (term.length <= 5) return 1;
	return 2;
};

const damerauLevenshteinDistance = (left: string, right: string, maximum: number) => {
	if (Math.abs(left.length - right.length) > maximum) return maximum + 1;

	let twoRowsBack = Array.from({ length: right.length + 1 }, (_, index) => index);
	let previousRow = [...twoRowsBack];

	for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
		const currentRow = [leftIndex];

		for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
			const substitutionCost = left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1;
			let distance = Math.min(
				previousRow[rightIndex] + 1,
				currentRow[rightIndex - 1] + 1,
				previousRow[rightIndex - 1] + substitutionCost,
			);

			if (
				leftIndex > 1 &&
				rightIndex > 1 &&
				left[leftIndex - 1] === right[rightIndex - 2] &&
				left[leftIndex - 2] === right[rightIndex - 1]
			) {
				distance = Math.min(distance, twoRowsBack[rightIndex - 2] + 1);
			}

			currentRow[rightIndex] = distance;
		}

		twoRowsBack = previousRow;
		previousRow = currentRow;
	}

	return previousRow[right.length];
};

const matchStrength = (queryTerm: string, indexedTerm: string) => {
	if (queryTerm === indexedTerm) return 150;

	if (queryTerm.length >= 3 && indexedTerm.startsWith(queryTerm)) {
		return 96 - Math.min(indexedTerm.length - queryTerm.length, 12);
	}

	if (queryTerm.length >= 4 && indexedTerm.includes(queryTerm)) {
		return 76 - Math.min(indexedTerm.length - queryTerm.length, 12);
	}

	const maximumDistance = maximumDistanceFor(queryTerm);
	if (maximumDistance === 0) return null;

	const distance = damerauLevenshteinDistance(queryTerm, indexedTerm, maximumDistance);
	if (distance > maximumDistance) return null;

	return 88 - distance * 18 - Math.abs(indexedTerm.length - queryTerm.length) * 2;
};

interface TokenMatch {
	score: number;
	term: string;
}

export const searchDeutschlandIndex = (
	index: DeutschlandSearchIndex,
	query: string,
): DeutschlandSearchResult[] => {
	const queryTerms = searchTokens(query);
	if (queryTerms.length === 0) return [];

	const matchesByQueryTerm: Array<Map<number, TokenMatch>> = [];

	for (const queryTerm of queryTerms) {
		const matchesByPost = new Map<number, TokenMatch>();

		for (const [indexedTerm, postIndexes, titlePostIndexes] of index.terms) {
			const strength = matchStrength(queryTerm, indexedTerm);
			if (strength === null) continue;

			const titlePosts = new Set(titlePostIndexes);
			const rarity = Math.log2((index.posts.length + 1) / (postIndexes.length + 1)) * 8;

			for (const postIndex of postIndexes) {
				const score = strength + rarity + (titlePosts.has(postIndex) ? 60 : 0);
				const previous = matchesByPost.get(postIndex);

				if (!previous || score > previous.score) {
					matchesByPost.set(postIndex, { score, term: indexedTerm });
				}
			}
		}

		if (matchesByPost.size === 0) return [];
		matchesByQueryTerm.push(matchesByPost);
	}

	const [firstMatches, ...remainingMatches] = matchesByQueryTerm;
	const combined = new Map<number, DeutschlandSearchResult>();

	for (const [postIndex, match] of firstMatches) {
		combined.set(postIndex, {
			postIndex,
			score: match.score,
			matchedTerms: [match.term],
		});
	}

	for (const matches of remainingMatches) {
		for (const [postIndex, result] of combined) {
			const match = matches.get(postIndex);

			if (!match) {
				combined.delete(postIndex);
				continue;
			}

			result.score += match.score;
			if (!result.matchedTerms.includes(match.term)) result.matchedTerms.push(match.term);
		}
	}

	return [...combined.values()].sort(
		(left, right) => right.score - left.score || left.postIndex - right.postIndex,
	);
};
