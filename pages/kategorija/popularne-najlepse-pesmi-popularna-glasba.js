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

export default function popularne_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>POPULARNE NAJLEPŠE PESMI POPULARNA GLASBA | Besedila Akordi Tablature</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="POPULARNE NAJLEPŠE PESMI POPULARNA GLASBA. Besedilo pesmi (lyrics, tekst, text),  Akordi prijemi (chords) ter Tablature (tabs) za kitaro, ukulele, klavir, harmoniko.
					"
				/>
				<meta
					name="keywords"
					content="Popularne  pesmi, najlepše pesmi, popularna glasba, kitara akordi, ritem kitara, akordi  za ukulele, akordi klavir,  tablature za kitaro, lyrics, tabs, chords, text, tekst,  besedilo, prijemi akordov za kitaro, osnovni akordi za kitaro. 
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>POPULARNE NAJLEPŠE PESMI</strong> POPULARNA GLASBA Besedila (Tekst, Lyrics), Akordi (Chords),
				Tablature (Tabs)
			</Typography>

			<Typography
				gutterBottom
				variant="subtitle1"
				component="h2"
				color="primary"
				style={{ marginTop: theme.spacing(3) }}
			>
				<strong>POPULARNE NAJLEPŠE PESMI</strong> POPULARNA GLASBA Besedila (Tekst, Text, Lyrics), Akordi
				prijemi (Chords), Tablature (Tabs) za kitaro, ukulele, klavir.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Kategorija <strong>popularne najlepše pesmi popularna glasba </strong> je spletna kategorija glasbenega
				portala Besedilo Akordi Tablature v kateri so zbrane dobre najboljše najlepše popularne slovenske pesmi,
				katere so dosegle največje število ogledov . Za posamezne popularne pesmi si lahko v bazi portala
				Besedilo akordi tablature ogledate: Akorde prijeme za kitaro (Chords), Besedila pesmi (lyrics, text,
				tekst), Tablature za kitaro (tabs) & Video spote za vašo priljubljeno popularno glasbo. Ko predvajate
				video spot željene najlepše popularne pesmi lahko istočasno spremljate in prepevate pripadajoče besedilo
				pesmi. Istočasno vidite tudi akorde za kitaro, ukulele, klavir, harmoniko, ki so namenjeni spremljavi
				popularni najlepših pesmi – popularne glasbe na vašem akordičnem glasbenem instrumentu. Razne ostale
				pesmi iščete preko ostalih kategorij (npr Rock pesmi v karegoriji Rock glasba) ali preko našega
				Brskalnika, v katerega lahko vpišete samo par črk vaše priljubljene popularne pesmi ali avtorja in
				skušal vam bo najti željeno skladbo z besedilom, akordi in tablaturo če ta obstaja.
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
						Trenutno popularna glasba in akordi
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
							Dobrodošli v kategoriji Popularne pesmi. Ponujamo vam veliko zbirko akordov za kitaro,
							klavir in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno
							pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil
							pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku Dodaj
							svoje Besedilo/Akorde. Pesem postane popularna, ko ima veliko gledanost iz tedna v teden. Če
							rabite pomoč pri igranju kitare ali pa vas morda zanima kaj drugega z glasbenega področja,
							vam na začetni strani ponujamo glasbene članke, od onsnovnih akordov za kitaro, video lekcij
							za učenje kitare, do malo bolj teoretičnih tem kot kvintni krog za iskanje akordov, ali pa
							morda članek za nakup nove akustične oziroma električne kitare ali klavirja(klaviature).
							Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji Popularne pesmi!
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/popularna');
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
