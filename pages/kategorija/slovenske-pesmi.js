import Layout from '../../components/Layout';
import Categories from '../../components/Categories';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Songbrowser from '../../components/Songbrowser';
import FeaturedArtistsList from '../../components/FeaturedArtistList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Head from 'next/head';
import Image from 'next/image';

const useStyles = makeStyles({
	listWrapper: {
		margin: theme.spacing(6, 0, 4, 0)
	}
});

export default function slovenske_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>SLOVENSKE PESMI SLOVENSKA ZABAVNA GLASBA | Besedilo Akordi Tablature</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="SLOVENSKE PESMI BESEDILO AKORDI: Besedila & akordi slovenskih pesmi. Besedilo (lyrics, tekst, text) Akordi (chords) za kitaro, ukulele, harmoniko, klavir.
					"
				/>
				<meta
					name="keywords"
					content="slovenske pesmi, slovenska glasba, besedilo pesmi, akordi za kitaro ukulele klavir harmoniko,  lyrics, tabs, chords, text, tekst
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>SLOVENSKE PESMI</strong> SLOVENSKA ZABAVNA GLASBA: Akordi Besedilo Tablature (Lyrics Chords Text
				Tabs)
			</Typography>

			<Typography
				gutterBottom
				variant="subtitle1"
				component="h2"
				color="primary"
				style={{ marginTop: theme.spacing(3) }}
			>
				<strong>SLOVENSKE PESMI</strong> SLOVENSKA ZABAVNA GLASBA: Besedilo (Tekst, Text, Lyrics), Akordi
				(Chords, prijemi), Tablature (Tabs) za kitaro, ukulele, klavir, harmoniko.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Kategorija <strong>slovenske pesmi slovenska zabavna glasba </strong> je baza najbolših najlepših
				priljubljenih slovenskih pesmi v kateri iščete: Akorde - prijeme (Chords), Besedilo (lyrics, text,
				tekst), Tablature za kitaro (tabs) & video spote za vaše najlepše slovenske pesmi. Poleg gledanja video
				spota željene slovenske pesmi lahko istočasno spremljate in prepevate pripadajoče besedilo pesmi. Akordi
				nad besedilom, ki jih istočasno vidite so namenjeni kot akordi za kitaro, ukulele, harmoniko, klavir
				oziroma spremljavi slovenskih zabavnih pesmi na vašem akordičnem instrumentu. Razne ostale pesmi iščete
				preko ostalih kategorij (npr Dalmatinske pesmi v karegoriji Hrvaške pesmi) ali preko našega Brskalnika,
				v katerega lahko vpišete samo par črk vaše priljubljene popularne pesmi ali avtorja in skušal vam bo
				najti željeno skladbo z besedilom, akordi in tablaturo če ta obstaja.
			</Typography>
			<nav style={{ marginTop: theme.spacing(4) }}>
				<Categories />
			</nav>
			<section style={{ marginTop: theme.spacing(6) }}>
				<FeaturedArtistsList mostViewedArtists={mostViewedArtists} mostSongsArtists={mostSongsArtists} />
			</section>

			<section className={classes.listWrapper}>
				<Typography variant="h6" gutterBottom>
					BESEDILA PESMI IN AKORDI:
				</Typography>
				<Songbrowser newsetsongs={newestSongs} popularSongs={popularSongs} />
			</section>

			<Accordion component="article">
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading} component="h2">
						Slovenske pesmi besedilo pesmi akordi za kitaro
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center">
							<Image
								src="/kategorije/Slovenske-pesmi-besedilo-pesmi-akordi-za-kitaro.jpg"
								alt="Slovenske-pesmi-besedilo-pesmi-akordi-za-kitaro"
								width={1920}
								height={1080}
							/>
						</Grid>
						<Typography component="p" variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
							Dobrodošli v kategoriji Slovenske pesmi. Ponujamo vam veliko zbirko akordov za kitaro,
							klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno
							slovensko pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju
							besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku
							Dodaj svoje Besedilo/Akorde. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj
							drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih
							akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni
							krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne
							kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji
							slovenske pesmi!
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/slovenska');
	const categoryData = await res.json();
	const newestSongs = categoryData[0];
	const popularSongs = categoryData[1];
	const mostViewedArtists = categoryData[2];
	const mostSongsArtists = categoryData[3];

	return {
		props: {
			newestSongs,
			popularSongs,
			mostViewedArtists,
			mostSongsArtists
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 5 // In seconds
	};
}
