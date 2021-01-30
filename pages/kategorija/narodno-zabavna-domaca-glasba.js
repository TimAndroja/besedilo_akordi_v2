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

export default function narodne_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>NARODNO ZABAVNA DOMAČA GLASBA Besedila Akordi Tablature</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Narodno zabavna domača glasba. Besedila pesmi (lyrics, tekst, text)  Akordi prijemi (chords) ter Tablature (tabs) za kitaro, ukulele, harmoniko, klavir.
					"
				/>
				<meta
					name="keywords"
					content="Narodno zabavna, narodnozabavna glasba, domača glasba,  narodno zabavna glasba, besedilo pesmi, kitara akordi,  akordi  ukulele, akordi klavir, akordi harmonika,  tablature za kitaro, lyrics, tabs, chords, text, tekst, narodno zabavne pesmi
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>NARODNO ZABAVNA DOMAČA GLASBA</strong> Besedila (Tekst, Lyrics), Akordi (Chords), Tablature
				(Tabs)
			</Typography>

			<Typography
				gutterBottom
				variant="subtitle1"
				component="h2"
				color="primary"
				style={{ marginTop: theme.spacing(3) }}
			>
				<strong> NARODNO ZABAVNA DOMAČA GLASBA</strong> Besedila (Tekst, Text, Lyrics), Akordi prijemi (Chords),
				Tablature (Tabs) za kitaro, ukulele, klavir, harmoniko vaših najboljših najlepših popularnih pesmi.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Kategorija <strong>narodno zabavna domača glasba</strong> je spletna kategorija glasbenega portala
				Besedilo Akordi Tablature v kateri so zbrane dobre najboljše najlepše popularne slovenske narodno
				zabavne pesmi. Za posamezne pesmi lahko v bazi najdeš: Akorde prijeme za kitaro (Chords), Besedila pesmi
				(lyrics, text, tekst), Tablature za kitaro (tabs) & Video spote za vaše priljubljeno narodno zabavno
				domačo glasbo. Ko predvajaš video spot željene narodnozabavne pesmi lahko istočasno spremljate in
				prepevate besedilo, akordi za kitaro, ukulele, harmoniko, klavir pa so namenjeni spremljavi na vašem
				gakordičnem glasbenem instrumentu. Razne ostale pesmi iščete preko ostalih kategorij (na primer: pesmi
				za otroke v kategoriji Otroške pesmi ) ali preko našega Brskalnika, v katerega lahko vpišete samo par
				črk vaše priljubljene popularne pesmi ali avtorja in skušal vam bo najti željeno skladbo z besedilom,
				akordi in tablaturo če ta obstaja.
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
						Narodno zabavna glasba besedila akordi za kitaro
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center">
							<Image
								src="/kategorije/Narodno-zabavna-glasba-besedila-akordi-za-kitaro.jpg"
								alt="Narodno-zabavna-glasba-besedila-akordi-za-kitaro"
								width={1920}
								height={1080}
							/>
						</Grid>
						<Typography component="p" variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
							Dobrodošli v kategoriji Narodno zabavna glasba. Ponujamo vam veliko zbirko akordov za
							kitaro, klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za
							kakšno slovensko narodno zabavno pesem in tako nam, vam in vsem drugim omogočite obilo
							zabave pri igranju in učenju besedil pesmi in akordov. Dodajanje svojega besedila je mogoče
							v orodni vrstici na zavihku Dodaj svoje Besedilo/Akorde. Če rabite pomoč pri igranju kitare
							ali pa vas morda zanima kaj drugega z glasbenega področja, vam na začetni strani ponujamo
							glasbene članke, od onsnovnih akordov za kitaro, video lekcij za učenje kitare, do malo bolj
							teoretičnih tem kot kvintni krog za iskanje akordov, ali pa morda članek za nakup nove
							akustične oziroma električne kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi,
							ki ustreza tebi v kategoriji narodno zabavne pesmi! Narodno zabavna glasba je ena izmed bolj
							razširjenih glasbenih zvrsti v Sloveniji, najdemo pa jo tudi v državah kot so Avstrija,
							Nemčija, Češka, Švica in Italija. Zvrst se je začela razvijati v 19. stoletju na podlagi
							ljudskih pesmi, za njo pa so značilni ritmi polke in valčka. V Sloveniji imamo številne
							narodno zabavne ansamble, ki jih lahko najamemo za igranje glasbe na veselicah, porokah in
							podobno. Za narodno zabavno glasbo je najbolj značilen inštrument diatonična harmonika
							oziroma frajtonerica, zato je večina akordov napisana za igranje na diatonično harmoniko, ki
							pa ni zmožna igrati vseh akordov.
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/narodna');
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
