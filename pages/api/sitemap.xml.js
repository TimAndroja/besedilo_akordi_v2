import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req, res) => {
	if (!res) return {};
	try {
		const songsres = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/paths/songs`);
		const artistsres = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/paths/artists`);
		const songs = await songsres.json();
		const artists = await artistsres.json();

		let allSongs = [];

		// Set response header
		res.setHeader('content-type', 'application/xml');
		res.setHeader('Content-Encoding', 'gzip');

		// A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
		// The readable stream it transforms must be in object mode.
		const smStream = new SitemapStream({
			hostname: 'https://besedilo-akordi.si'
		});

		const pipeline = smStream.pipe(createGzip());
		// Add any static entries here
		smStream.write({
			url: '/'
		});
		smStream.write({
			url: '/kategorija/bozicne-pesmi-bozicna-glasba'
		});
		smStream.write({
			url: '/kategorija/hrvaske-dalmatinske-pesmi-hrvaska-dalmatinska-glasba'
		});
		smStream.write({
			url: '/kategorija/narodno-zabavna-domaca-glasba'
		});
		smStream.write({
			url: '/kategorija/ostalo-angleske-disco-pesmi-instrumentalna-klasicna-glasba'
		});
		smStream.write({
			url: '/kategorija/pop-rock-gasba-ex-yu-yugo'
		});
		smStream.write({
			url: '/kategorija/popularne-najlepse-pesmi-popularna-glasba'
		});
		smStream.write({
			url: '/kategorija/slovenska-popevka-plesna-glasba'
		});
		smStream.write({
			url: '/kategorija/slovenske-ljudske-pesmi-ljudska-glasba'
		});
		smStream.write({
			url: '/kategorija/slovenske-otroske-pesmi-za-otroke'
		});
		smStream.write({
			url: '/kategorija/ucenje-igranje-sola-kitare'
		});

		// E.g. we create a sitemap.xml for articles
		// Set articles change frequencey is weekly
		songs.forEach((song) => {
			smStream.write({
				url: `/pesmi/${song.params.id}`
			});
		});

		artists.forEach((artist) => {
			smStream.write({
				url: `/izvajalci/${artist.params.id}`
			});
		});

		smStream.end();

		// cache the response
		// streamToPromise.then(sm => sitemap = sm)
		streamToPromise(pipeline);
		// stream the response
		pipeline.pipe(res).on('error', (e) => {
			throw e;
		});
	} catch (e) {
		res.status(500).end();
	}
};
