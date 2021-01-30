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

export default function popevka_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>SLOVENSKA POPEVKA PLESNA GLASBA Besedila Akordi Tablature</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Slovenska popevka plesna glasba. Besedila pesmi (lyrics, tekst, text)  Akordi prijemi (chords) ter Tablature (tabs) za kitaro, ukulele, harmoniko, klavir.
					"
				/>
				<meta
					name="keywords"
					content="Slovenska popevka, plesna glasba, besedilo pesmi, kitara akordi,  akordi ukulele, klavir, harmonika,  tablature za kitaro, lyrics, tabs, chords, text, tekst, zimzelene popevke
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>SLOVENSKA POPEVKA PLESNA GLASBA</strong> Besedila (Tekst, Lyrics), Akordi (Chords), Tablature
				(Tabs)
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
				Kategorija <strong>slovenska popevka plesna glasba</strong> je baza dobrih najboljših najlepših
				zimzelenih slovenskih popevk besedil in plesne glasbe v pravih plesnih ritmih. V Kategoriji lahko
				iščete: Akorde prijeme za kitaro (Chords), Besedila pesmi (lyrics, text, tekst), Tablature za kitaro
				(tabs) & video spote vaših priljubljenih slovenskih popevk in plesno glasbo v pravih plesnih ritmih.
				Poleg predvajanja video spota istočasno vidite besedilo. Ustrezno besedilo lahko na željo prepevate ,
				akordi pa so namenjeni za kitaro, ukulele, harmoniko, klavir ali kak drug harmonični glasbeni
				instrument. Razne ostale pesmi iščete preko ostalih kategorij (na primer: domačo glasbo v kategoriji
				Narodno zabavna ) ali preko našega Brskalnika, v katerega lahko vpišete samo par črk vaše priljubljene
				popularne pesmi ali avtorja in skušal vam bo najti željeno skladbo z besedilom, akordi in tablaturo če
				ta obstaja.
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
					<Typography className={classes.heading}>Akordi in besedila pesmi slovenske popevke</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center">
							<Image
								src="/kategorije/Slovenska-popevka-besedilo-akordi-za-kitaro.jpg"
								alt="Slovenska-popevka-besedilo-akordi-za-kitaro"
								width={1920}
								height={1080}
							/>
						</Grid>
						<Typography component="p" variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
							Dobrodošli v kategoriji Slovenska Popevka. Ponujamo vam veliko zbirko akordov za kitaro,
							klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno
							Slovensko popevko in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in
							učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na
							zavihku Dodaj svoje Besedilo/Akorde. Če rabite pomoč pri igranju kitare ali pa vas morda
							zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od
							onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot
							kvintni krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma
							električne kitare ali klavirja(klaviature). Veliko srče pri iskanju svoje popevke, ki
							ustreza tebi v kategoriji slovenska popevka! Slovenska popevka, ki se je nekdaj imenovala
							Dnevi slovenske zabavne glasbe je slovenski festival petja in zabavne glasbe, ki se je prvič
							pojavil leta 1962 in deloval vse do leta 1983, nato pa po premoru zopet začel delovati leta
							1998. Festival je doživel svoje zlato obdobje v 80. letih, ko so nam bile predstavljene
							zimzelene uspešnice kot so Zemlja pleše orion, Med iskrenimi ljudmi, Maček v žaklju, Poletna
							noč in mnogo več.
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/popevka');
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
