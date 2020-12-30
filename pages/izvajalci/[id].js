import Layout from '../../components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import Songbrowser from '../../components/Songbrowser';
import DefaultErrorPage from 'next/error';
import theme from '../../styles/theme';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
	listWrapper: {
		margin: theme.spacing(4, 0)
	},
	mainWrapper: {
		marginTop: theme.spacing(10),
		marginLeft: theme.spacing(8),
		marginRight: theme.spacing(8),
		width: '100%'
	},
	formControl: {
		margin: theme.spacing(0),
		minWidth: 120
	},
	listWrapper: {
		margin: theme.spacing(4, 0, 4, 0)
	}
});

function youtubeToEmbed(youtubeUrl) {
	return youtubeUrl.replace('watch?v=', 'embed/');
}

function Artist({ songsNew, songsPopular, authorName }) {
	// Render post...
	const classes = useStyles();
	const responsiveYoutube = (
		<div
			className="video"
			style={{
				position: 'relative',
				paddingBottom: '56.25%' /* 16:9 */,
				paddingTop: 25,
				height: 0
			}}
		>
			<iframe
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
				src={youtubeToEmbed(songsNew[0].youtube)}
				frameBorder="0"
				allowFullScreen
				title={`skladbe pesmi akordov izvajalca ${authorName} tekst tablature zbirka akordov za kitaro ukulele klavir`}
			/>
		</div>
	);
	const metaDescription = `${authorName} Pesmi Akordi Besedila Skladbe Tablature Tekst Songs Lyrics. Zbirka pesmi. besedil izvajalca ${authorName}. Besedilo, akordi tablature za kitaro, klavir, ukulele, harmoniko`;
	const metaKeywords = `${authorName} pesmi akordi besedila skladbe za kitaro klavir harmoniko ukulele lyrics songs tekst text tablature `;
	const showSongs = (
		<section className={classes.listWrapper}>
			<Typography variant="h6" gutterBottom>
				SEZNAM BESEDIL AKORDOV IN TABLATUR, KI SE NAHAJAJO V NAŠI BAZI GLASBENEGA IZVAJALCA:{' '}
				<strong>
					<span style={{ color: theme.palette.secondary.main }}>{authorName.toUpperCase()}</span>
				</strong>
			</Typography>
			<Songbrowser newsetsongs={songsNew} popularSongs={songsPopular} />
		</section>
	);
	if (!authorName) {
		return (
			<div>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				<DefaultErrorPage statusCode={404} />
			</div>
		);
	}

	return (
		<Layout>
			<Head>
				<title>{authorName.toUpperCase()} Pesmi Akordi Besedila Skladbe Tablature Tekst Songs Lyrics</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={metaDescription} />
				<meta name="keywords" content={metaKeywords} />
			</Head>
			<Grid container spacing={8}>
				<Grid item md={7} sm={6} xs={12}>
					<Box marginBottom={3}>
						<Typography variant="h4" component="h1">
							<span style={{ color: theme.palette.secondary.main }}>
								<strong>{authorName.toUpperCase()}</strong>
							</span>{' '}
							PESMI AKORDI BESEDILA SKLADBE
						</Typography>
						<Typography variant="h6" component="h2">
							<span style={{ color: theme.palette.primary.main }}>
								<strong>{authorName.toUpperCase()}</strong>
							</span>{' '}
							Pesmi akordi besedila skladbe tablature tekst songs lyrics
						</Typography>
						<Divider />
					</Box>

					<Grid container>
						<Grid item xs={12}>
							<Box marginBottom={2}>
								<Typography component="p" variant="body2">
									Na strani portala <strong>{authorName}</strong> pesmi akordi besedila skladbe
									tablature tekst songs lyrics se nahaja baza pesmi in besedil s pripadajočimi akordi
									glasbenega izvajalca {authorName}{' '}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<Typography component="h3" variant="overline" color="textSecondary">
								{authorName} pesmi akordi besedila - Prilubljen video spot
							</Typography>
						</Grid>

						<Grid item xs={12} sm={10} md={5}>
							{responsiveYoutube}
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={5} sm={6} xs={12} style={{ margin: 'auto' }}>
					<Box>
						<Box paddingLeft={0.2}>
							<Typography component="h3" variant="overline" color="textSecondary">
								{authorName} pesmi akordi besedila - Fotografija
							</Typography>
						</Box>
						<Paper style={{ padding: theme.spacing(1.2) }}>
							<Image
								height="360px"
								width="480px"
								layout="responsive"
								src={`${process.env.NEXT_PUBLIC_WEBSERVER}/api/images/${songsPopular[0]
									.youtube_image_name}`}
								alt={`${authorName} pesmi akordi besedila skladbe tablature tekst songs lyrics`}
							/>
						</Paper>
					</Box>
				</Grid>
			</Grid>

			{showSongs}
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/paths/artists`);
	const paths = await res.json();

	return {
		paths,
		fallback: 'blocking'
	};
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1

	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/artist/${params.id}`);
	const songs = await res.json();
	const songsNew = songs[0];
	const songsPopular = songs[1];
	const authorName = songs[2];

	// Pass post data to the page via props
	return { props: { songsNew, songsPopular, authorName }, revalidate: 360 };
}

export default Artist;
