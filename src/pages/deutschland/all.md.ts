import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { markdownForSequence, sortDeutschlandPosts } from '../../lib/deutschland';

export const prerender = true;

export const GET: APIRoute = async () => {
	const posts = sortDeutschlandPosts(await getCollection('deutschland'));

	return new Response(markdownForSequence(posts), {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Content-Disposition': 'attachment; filename="deutschland-complete-sequence.md"',
		},
	});
};
