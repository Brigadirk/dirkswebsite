import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { DeutschlandSearchIndex } from '../../lib/deutschland-search';
import { searchTokens } from '../../lib/deutschland-search';
import { sortDeutschlandPosts } from '../../lib/deutschland';

export const prerender = true;

const textWithoutMarkup = (value: string) =>
	value.replace(/https?:\/\/[^\s)]+/g, ' ').replace(/<[^>]+>/g, ' ');

export const GET: APIRoute = async () => {
	const posts = sortDeutschlandPosts(await getCollection('deutschland'));
	const terms = new Map<string, { posts: Set<number>; titles: Set<number> }>();

	posts.forEach((post, postIndex) => {
		const titleTerms = new Set(searchTokens(post.data.title));
		const allTerms = new Set([
			...titleTerms,
			...searchTokens(post.data.description),
			...searchTokens(textWithoutMarkup(post.body ?? '')),
		]);

		for (const term of allTerms) {
			const entry = terms.get(term) ?? { posts: new Set<number>(), titles: new Set<number>() };
			entry.posts.add(postIndex);
			if (titleTerms.has(term)) entry.titles.add(postIndex);
			terms.set(term, entry);
		}
	});

	const searchIndex: DeutschlandSearchIndex = {
		version: 1,
		posts: posts.map((post) => ({
			id: post.id,
		})),
		terms: [...terms.entries()]
			.sort(([left], [right]) => left.localeCompare(right))
			.map(([term, entry]) => [term, [...entry.posts], [...entry.titles]]),
	};

	return new Response(JSON.stringify(searchIndex), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
