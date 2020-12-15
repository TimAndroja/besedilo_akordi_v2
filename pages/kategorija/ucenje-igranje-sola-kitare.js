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

export default function slovenske_pesmi({ newestSongs, popularSongs, mostSongsArtists, mostViewedArtists }) {
	const classes = useStyles();

	return (
		<Layout>
			<Head>
				<title>UČENJE IGRANJE ŠOLA KITARE | E glasbena šola kitare na daljavo</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="UČENJE IGRANJE ŠOLA KITARE Besedila. E glasbena šola kitare na daljavo. Kako se naučiti igrati kitaro. Učenje akustične električne kitare za začetnike.
					"
				/>
				<meta
					name="keywords"
					content="E glasbena šola, učenje kitare, igranje kitare, kako se naučiti igrati kitaro, učenje kitare za začetnike, glasbena šola na daljavo, šola kitare, učenje bas kitare, učenje sintesajzerja.
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				<strong>UČENJE IGRANJE ŠOLA KITARE</strong> | E glasbena šola kitare na daljavo, Kako se naučiti igrati
				kitaro
			</Typography>

			<Typography
				gutterBottom
				variant="subtitle1"
				component="h2"
				color="secondary"
				style={{ marginTop: theme.spacing(3) }}
			>
				<strong>UČENJE IGRANJE ŠOLA KITARE</strong> Besedila, Akordi, E glasbena šola kitare na daljavo, Kako se
				naučiti igrati kitaro
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Kategorija <strong>učenje igranje šola kitare </strong> je spletna kategorija glasbenega portala
				Besedilo Akordi Tablature v kateri so zbrane lekcije za kitaro, bas kitaro in sintesajzer. Gre za E
				glasbeno šolo na daljavo oziroma tečaj kitare, ki bo koristil vsem, ki se ukvarjajo z vprašanjem, Kako
				se naučiti igrati kitaro? Na osnovi glasbenega portala učenje igranje šola kitare boste lahko za
				posamezne popularne pesmi, ki so v bazi portala izvedli učenje kitare preko spleta. Tečaj kitare oziroma
				kitarske lekcije obsegajo Akorde prijeme za kitaro (Chords), Besedila pesmi (lyrics, text, tekst),
				Tablature za kitaro (tabs) & Video spote vaših priljubljenih pesmi ki bi se jih želeli naučiti igrati.
				Poučevanje kitare na portalu poteka v raznih težavnostnih stopnjah od igranja učenja kitare za
				začetnike, do te težjih lekcij ritem in solo kitare predvsem na osnovi tablatur, ki so priljubljeni
				zapisi za učenje poučevanje kitare. V E glasbeni šoli na daljavo boste našli tudi nekaj lekcij za učenje
				bas kitare in učenje sintesajzerja. Na osnovi učenja kitare za začetnike bo vaše glasbeno znanje
				postopoma napredovalo. Naučili se boste osnov kako igrati kitaro, ritem kitaro, solo kitaro, električno
				kitaro, Klasično kitaro, brati tablature za kitaro, brati prijeme akordov za kitaro.
			</Typography>
			<Typography variant="caption" component="p" align="justify">
				Za vse tiste, ki bi želeli glasbenega učitelja mentorja kitare osebno pa vabimo v privarno glasbeno šolo
				kitare za popularno in ostalo glasbo{' '}
				<LinkMUI hred="https://ansambel-objem.si/ucenje-sola-kitare-sintesajzerja/" target="_blank">
					Glasbena šola Androja
				</LinkMUI>{' '}
				v kolikor bo imel glasbeni mentor kitare Tugomir Androja še kako prosto mesto. Ko bo vaše igranje kitare
				zadovoljivo vas vabimo na ostale naše spletne strani kjer lahko razne ostale pesmi iščete preko ostalih
				kategorij (npr Ljudska glasba v karegoriji Ljudske pesmi) ali preko našega Brskalnika, v katerega lahko
				vpišete samo par črk vaše priljubljene popularne pesmi ali avtorja in skušal vam bo najti željeno
				skladbo z besedilom, akordi in tablaturo če ta obstaja. E glasbena šola na daljavo. Učenje kitare za
				začetnike. Igranje oziroma učenje kitare naj z nami postane zabava. Poleg prepevanja besedila lahko
				poleg pesmi igrate ritem kitaro tako, da sledite prijeme akordov za kitaro in označen ritem. Na portalu
				je mnogo raznovrstnih pesmi (lahke in težje pesmi za kitaro) tako da je s pomočjo portala Igranje učenje
				kitare primerno za začetnike, kot tudi za kitariste z določenim predznanjem. Osnovne akorde prijeme
				(chords) za kitaro si ogledate na naši vstopni strani.
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
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/lekcija');
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
