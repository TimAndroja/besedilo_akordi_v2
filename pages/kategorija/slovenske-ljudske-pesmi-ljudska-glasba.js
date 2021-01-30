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
import LinkMUI from '@material-ui/core/Link';

const useStyles = makeStyles({
	listWrapper: {
		margin: theme.spacing(6, 0, 4, 0)
	}
});

export default function ljudske_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>SLOVENSKE LJUDSKE PESMI LJUDSKA GLASBA | Akordi Besedilo Tablature</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="SLOVENSKE LJUDSKE PESMI LJUDSKA GLASBA. Besedila pesmi (lyrics, tekst, text)  Akordi prijemi (chords) ter Tablature (tabs) za kitaro, ukulele, harmoniko, klavir.
					"
				/>
				<meta
					name="keywords"
					content="Ljudske pesmi, slovenske ljudske pesmi, ljudska pesem, besedilo pesmi, kitara akordi,  akordi ukulele, klavir, harmonika,  tablature za kitaro, lyrics, tabs, chords, text, tekst, 
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>SLOVENSKE LJUDSKE PESMI</strong> LJUDSKA GLASBA Besedila (Tekst, Lyrics), Akordi (Chords),
				Tablature (Tabs)
			</Typography>

			<Typography
				gutterBottom
				variant="subtitle1"
				component="h2"
				color="primary"
				style={{ marginTop: theme.spacing(3) }}
			>
				<strong>SLOVENSKE LJUDSKE PESMI </strong> LJUDSKA GLASBA Besedilo (Tekst, Text, Lyrics), Akordi prijemi
				(Chords), Tablature (Tabs) za kitaro, ukulele, klavir, harmoniko vaših najboljših najlepših popularnih
				pesmi.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Kategorija <strong>slovenske pesmi slovenska zabavna glasba </strong>je baza dobrih najboljših najlepših
				slovenskih ljudskih pesmi in besedil slovenske ljudske glasbe. Za posamezne ljudske pesmi si lahko v
				kategoriji slovenske ljudske pesmi ljudska glasba ogledate Akorde prijeme za kitaro (Chords), Besedila
				pesmi (lyrics, text, tekst), Tablature za kitaro (tabs) & video spote za vaše najboljše najlepše
				slovenske ljudske pesmi. Poleg spremljanja video spota lahko istočasno spremljate in prepevate
				pripadajoče besedilo. Poleg besedila so dopisani za kitaro, ukulele, harmoniko, klavir ali kak drug
				harmonični instrument. Razne ostale pesmi iščete preko ostalih kategorij (na primer: plesna glasba v
				karegoriji Slovenske popevke) ali preko našega Brskalnika, v katerega lahko vpišete samo par črk vaše
				priljubljene popularne pesmi ali avtorja in skušal vam bo najti željeno skladbo z besedilom, akordi in
				tablaturo če ta obstaja.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				V kategoriji slovenske ljudske pesmi ljudska glasba se posebej zahvaljujemo{' '}
				<LinkMUI href="https://ansambel-objem.si/" target="_blank">
					{' '}
					glasbenikom skupine OBJEM
				</LinkMUI>
				, ki so prispevali večji del{' '}
				<LinkMUI href="https://ansambel-objem.si/ljudska-glasba-slovenske-ljudske-pesmi/" target="_blank">
					sodobno prirejenih ljudskih pesmi
				</LinkMUI>.
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
					<Typography className={classes.heading}>Ljudske pesmi besedila akordi za kitaro</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center">
							<Image
								src="/kategorije/Ljudske-pesmi-besedila-akordi-za-kitaro.jpg"
								alt="Ljudske-pesmi-besedila-akordi-za-kitaro"
								width={1920}
								height={1080}
							/>
						</Grid>
						<Typography component="p" variant="subtitle2" style={{ marginTop: theme.spacing(2) }}>
							Dobrodošli v kategoriji Ljudeske pesmi. Ponujamo vam veliko zbirko akordov za kitaro, klavir
							in druge inštrumente. Vabimo, da tudi vi dodate svoje akorde ali tablature za kakšno ljudsko
							pesem in tako nam, vam in vsem drugim omogočite obilo zabave pri igranju in učenju besedil
							pesmi in akordov. Dodajanje svojega besedila je mogoče v orodni vrstici na zavihku Dodaj
							svoje Besedilo/Akorde. Če rabite pomoč pri igranju kitare ali pa vas morda zanima kaj
							drugega z glasbenega področja, vam na začetni strani ponujamo glasbene članke, od onsnovnih
							akordov za kitaro, video lekcij za učenje kitare, do malo bolj teoretičnih tem kot kvintni
							krog za iskanje akordov, ali pa morda članek za nakup nove akustične oziroma električne
							kitare ali klavirja(klaviature). Veliko srče pri iskanju pesmi, ki ustreza tebi v kategoriji
							Ljudske pesmi! Ljudske pesmi so pesmi katerim avtor ni znan in so se prenašale iz roda v
							rod, večinoma so se prenašale s petjem, kot ustno izročilo in se je zato tudi njihova oblika
							malce spreminjala, zato danes lahko najdemo različne verzije iste pesmi. Večina slovenskih
							ljudskih pesmi je nastala v 19. in 20. stoletju, te pa so prihajale z različnih delov
							slovenije in zato tudi v naši zbirki najdemo pesmi in akorde z različnimi slovenskimi
							dialekti. Ljudske pesmi je konec 19. stoletja zapisal Karel Štrekelj v knjigi Slovenske
							narodne pesmi, nato pa smo jim dodali tudi akorde, da jih lahko igramo in pojemo z
							različnimi inšturumenti. Nekaj bolj znanih slovenskih ljudskih pesmi so Na juriš, Čuk se je
							oženil, Kuža pazi, mi se mamo radi, lepa Anka kolo vodi, pri frani cerkvici, kje so tiste
							stezice itd. katera besedilo pesmi in akorde lahko najdete tudi na našem portalu pod
							kategorijo ljudske pesmi.
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/ljudska');
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
