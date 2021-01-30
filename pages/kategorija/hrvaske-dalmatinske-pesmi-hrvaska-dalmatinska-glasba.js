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
import Link from 'next/link';
import LinkMUI from '@material-ui/core/Link';
import next from 'next';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
	listWrapper: {
		margin: theme.spacing(6, 0, 4, 0)
	}
});

export default function hrvaske_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>HRVAŠKE DALMATINSKE PESMI HRVAŠKA DALMATINSKA GLASBA | Akordi Besedilo</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="HRVAŠKE DALMATINSKE PESMI HRVAŠKA DALMATINSKA GLASBA: Besedila & akordi za hrvaške, dalmatinske pesmi. Besedilo (lyrics, tekst, text) Akordi (chords) za kitaro, ukulele, harmoniko, klavir.
					"
				/>
				<meta
					name="keywords"
					content="hrvaške pesmi, dalmatinske pesmi, ex yu pesmi, besedilo pesmi, akordi za kitaro ukulele klavir harmoniko,  lyrics, tabs, chords, text, tekst, muzika, pjesme, glazba"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>HRVAŠKE DALMATINSKE PESMI</strong> HRVAŠKA DALMATINSKA GLASBA Besedilo (Tekst, Text, Lyrics) |
				Akordi (Chords), Tablature (Tabs)
			</Typography>

			<Typography
				gutterBottom
				variant="subtitle1"
				component="h2"
				color="primary"
				style={{ marginTop: theme.spacing(3) }}
			>
				<strong>HRVAŠKE DALMATINSKE PESMI</strong> HRVAŠKA DALMATINSKA GLASBA najlepše pesmi, uspešnice,
				Besedilo (Tekst, Text, Lyrics), Akordi (Chords), Tablature (Tabs) za kitaro, ukulele, klavir, harmoniko.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Kategorija <strong>hrvaške dalmatinske pesmi </strong> hrvaška dalmatinska glasba je baza hrvaških in
				dalmatinskih pesmi v kateri iščete: Akorde prijeme za kitaro (Chords), Besedilo (lyrics, text, tekst),
				Tablature (tabs) za kitaro & video spote za vaše najboljše najlepše hrvaške – dalmatinske pesmi za dušo
				in srce. Poleg predvajanja video spota željene hrvaške oziroma dalmatinske pesmi lahko istočasno
				spremljate in prepevate pripadajoče besedilo pesmi. Akordi ki jih vidite nad besedilom so namenjeni kot
				akordi za kitaro, ukulele, harmoniko, klavir – spremljavi vaših najlepših hrvaških pesmi na akordičnem
				glasbenem instrumentu. Razne ostale pesmi iščete preko ostalih kategorij (npr yugo rock pesmi v
				kategoriji Pop rock) ali preko našega Brskalnika, v katerega lahko vpišete samo par črk vaše
				priljubljene popularne pesmi ali avtorja in skušal vam bo najti željeno skladbo z besedilom, akordi in
				tablaturo če ta obstaja.
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
					<Typography className={classes.heading}>
						Hrvaške in dalmatinske pesmi, Ex yu besedila z akordi za kitaro
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center">
							<Image
								src="/kategorije/Hrvaske-pesmi-besedilo-akordi-za-kitaro.jpg"
								alt="Hrvaske-pesmi-besedilo-akordi-za-kitaro"
								width={1920}
								height={1080}
							/>
						</Grid>
						<Typography component="p" variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
							Dobrodošli v kategoriji Hrvaške pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir
							in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno hrvaško
							ali dalmatinsko pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in
							učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na
							zavihku Dodaj svoje Besedilo/Akorde . Če rabite pomoč pri igranju kitare ali pa vas morda
							zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od
							onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot
							kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma
							električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v
							kategoriji dalmatinske in hrvaške pesmi!
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/hrvaska');
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
