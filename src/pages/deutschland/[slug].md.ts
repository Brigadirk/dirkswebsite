import { getCollection } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import {
	type DeutschlandPost,
	markdownFilenameForPost,
	markdownForPost,
} from '../../lib/deutschland';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCollection('deutschland');

	return posts.map((post) => ({
		params: { slug: post.id },
		props: { post },
	}));
};

export const GET: APIRoute = ({ props }) => {
	const post = props.post as DeutschlandPost;

	return new Response(markdownForPost(post), {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Content-Disposition': `attachment; filename="${markdownFilenameForPost(post)}"`,
		},
	});
};
