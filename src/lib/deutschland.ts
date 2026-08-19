import type { CollectionEntry } from 'astro:content';

export type DeutschlandPost = CollectionEntry<'deutschland'>;

export const formatDate = (date: Date) => date.toISOString().slice(0, 10);

export const titleWithoutDate = (title: string) =>
	title.replace(/^\d{4}(?:-\d{2}-\d{2})?\s*-\s*/, '');

export const titleParts = (title: string, pubDate?: Date) => {
	const dateMatch = title.match(/^\d{4}(?:-\d{2}-\d{2})?/);

	if (!dateMatch) {
		return {
			date: '',
			source: '',
			title,
		};
	}

	const date = dateMatch[0].length === 4 && pubDate ? formatDate(pubDate) : dateMatch[0];
	const withoutDate = titleWithoutDate(title);
	const [source, ...rest] = withoutDate.split(/\s+-\s+/);

	return {
		date,
		source: rest.length > 0 ? source : '',
		title: rest.length > 0 ? rest.join(' - ') : withoutDate,
	};
};

const numberedSeriesInfo = (title: string) => {
	const withoutDate = titleWithoutDate(title);
	const match = withoutDate.match(/^(.*?\b(?:lecture|episode|part|session|chapter))\s+(\d+)\b/i);

	if (!match) {
		return null;
	}

	return {
		key: match[1].toLowerCase().replace(/\s+/g, ' ').trim(),
		number: Number(match[2]),
	};
};

export const sortDeutschlandPosts = (posts: DeutschlandPost[]) =>
	posts.sort((a, b) => {
		const dateDiff = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

		if (dateDiff !== 0) {
			return dateDiff;
		}

		const aSeries = numberedSeriesInfo(a.data.title);
		const bSeries = numberedSeriesInfo(b.data.title);

		if (aSeries && bSeries && aSeries.key === bSeries.key) {
			return bSeries.number - aSeries.number;
		}

		return 0;
	});

export const markdownFilenameForPost = (post: DeutschlandPost) => `${post.id}.md`;

const cleanMarkdownBody = (body: string) =>
	body
		.replace(/<span class="duration-label">Duration:<\/span>\s*/g, 'Duration: ')
		.replace(/<span class="duration-time">([^<]+)<\/span>/g, '$1')
		.replace(/<span class="transcript-timestamp">([^<]+)<\/span>/g, '$1');

export const markdownForPost = (post: DeutschlandPost) =>
	`# ${post.data.title}\n\n${cleanMarkdownBody(post.body ?? '').trim()}\n`;

export const markdownForSequence = (posts: DeutschlandPost[]) =>
	[
		'# Deutschland',
		'',
		...posts.flatMap((post) => [
			`# ${formatDate(post.data.pubDate)} - ${titleWithoutDate(post.data.title)}`,
			'',
			cleanMarkdownBody(post.body ?? '').trim(),
			'',
		]),
	].join('\n');
