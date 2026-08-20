const publisherDomains = [
	'edge.org',
	'philosophynow.org',
	'daviddeutsch.org.uk',
	'spiegel.de',
	'newscientist.com',
	'project-syndicate.org',
	'aeon.co',
	'nautil.us',
	'nature.com',
	'economist.com',
	'cbc.ca',
];

export const deutschlandPublisherSearchUrl = (query: string) => {
	const sites = publisherDomains.map((domain) => `site:${domain}`).join(' OR ');
	const url = new URL('https://www.google.com/search');
	url.searchParams.set('q', `${query.trim()} "David Deutsch" (${sites})`);
	return url.toString();
};
