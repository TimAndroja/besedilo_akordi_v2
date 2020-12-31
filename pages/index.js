import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import SongCarousel from '../components/SongCarousel';
import Categories from '../components/Categories';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import theme from '../styles/theme';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Image from 'next/image';
import Link from 'next/link';
import LinkMUI from '@material-ui/core/Link';
const Diacritics = require('diacritic');
const useStyles = makeStyles({
	cardContent: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingTop: theme.spacing(1.4),
		paddingBottom: theme.spacing(1.4)
	},
	containerMargin: {
		marginTop: theme.spacing(10),
		padding: 0
	},
	carouselMargin: {
		marginBottom: theme.spacing(8),
		marginTop: theme.spacing(2)
	},

	blogMedia: {
		padding: theme.spacing(4)
	},

	listViews: { textAlign: 'right' },
	opisPortala: {
		width: '90%',
		margin: 'auto'
	},

	cardWrapper: {
		outline: 'none',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1)
	}
});

export default function index({ newSongs, curentlyPopularSongs, popularArtists, mostViewedSongs, mostSongsArtists }) {
	function artistToUrl(string) {
		return (
			'/izvajalci/' +
			Diacritics.clean(string).replace(/[^a-z0-9]/gi, '-').toLowerCase() +
			'-pesmi-akordi-besedila-skladbe'
		);
	}

	function responsiveYoutube(url) {
		return (
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
					src={url}
					frameBorder="0"
					allowFullScreen
				/>
			</div>
		);
	}

	const classes = useStyles();

	const blog = (
		<Grid container>
			<Accordion component="article">
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading}>
						Osnovni Akordi in prijemi za kitaro (Guitar Chords)
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center">
							<Image
								src="/AKORDI-PRIJEMI-ZA-KITARO.jpg"
								alt="AKORDI-PRIJEMI-ZA-KITARO"
								width={1200}
								height={900}
							/>
						</Grid>
						<Typography variant="h6" component="h3">
							Osnovni prijemi akordov, za začetno učenje kitare
						</Typography>
						<Typography variant="subtitle2" component="p">
							<strong>Opombe:</strong>

							<li>
								<strong>Major</strong> po slovensko pomeni <strong>Dur</strong> (A Major = A Dur)
							</li>
							<li>
								<strong>Minior</strong> po slovensko pomen <strong>Mol</strong> (A Minior = A Mol)
							</li>
							<li>
								Znak <strong>O</strong> na sliki pomeni, da kitarsko struno <strong>igramo</strong>,
								vendar na njej nimamo položenega nobenega prsta{' '}
							</li>
							<li>
								Znak <strong>X</strong> na sliki pomeni, da strune kitare <strong>neigramo</strong>
							</li>
							<li>
								<strong>B Major</strong> in <strong>B Minior</strong> v slovenskem jeziku pomenita{' '}
								<strong>H Dur</strong> in <strong>H Mol</strong>
							</li>
							<br />
							<strong>Navodila za uporabo:</strong>
							<p>
								Na zgornji tablaturi, izberemo akordi, ki ga bomo zaigrali na električni ali akustični
								kitari. Na kitaro položimo prste sledeče po številkah: Prste začnemo šteti s kazalcem,
								ta ima številko 1 in tako naprej, kot je prikazano na zgornji tablaturi(1-kazalec,
								2-sredinec, 3-prstanec, 4-mezinec). Ko imamo vse prste na pravilnih strunah, zabrenkamo
								na vse strune, razen tiste, ki so označene s simbolom <strong>X</strong>. Pod vsako
								sliko imaš pod struno označeno kateri ton igraš na kitari.
							</p>
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion component="article">
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading}>
						Vse najboljše kitarska lekcija (Chords, Lyrics, Tabs)
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center" className={classes.blogMedia}>
							<Grid item xs={10}>
								{responsiveYoutube('https://www.youtube.com/embed/D6uG69aL3VQ')}
							</Grid>
						</Grid>
						<Typography variant="h6" component="h3">
							Vse najbolješ kitarska lekcija (Chords, Lyrics, Tabs)
						</Typography>
						<Typography variant="subtitle2" component="p">
							<p>
								V interaktivni kitarski lekciji se boš nauči Osnoven ritem igranja, napreden ritem
								igranja, štetje in poudarjanje ritma, osnovne akorde, Igranje melodije, pridobil ogromno
								glasbenega znanja, napotkov in trikov pri učenju kitare in še mnogo več.
							</p>
							<p>
								Lekcijo za portal BESEDILO-AKORDI pripravil{' '}
								<LinkMUI
									href="https://ansambel-objem.si/ucenje-sola-kitare-sintesajzerja"
									target="blank"
								>
									glasbeni mentor Tugomir Androja
								</LinkMUI>
								, vodja ansambla skupine Objem. Glasbena{' '}
								<LinkMUI href="https://ansambel-objem.si/" target="_blank">
									skupina Objem
								</LinkMUI>{' '}
								je že mnogo let znana na področju igranja porok, kot vodilni slovenski{' '}
								<LinkMUI href="https://ansambel-objem.si/poroka-band-za-poroko/" target="_blank">
									poročni band
								</LinkMUI>
								. Glasbeniki – muzikanti glasbene skupine Objem, že tretje desetletje razveseljujejo
								svoje naročnike po celotni Sloveniji in jih naročniki z veseljem najamejo, kot dober{' '}
								<LinkMUI href="https://ansambel-objem.si/abraham-ansambel-za-abrahama/" target="_blank">
									bend ansambel za poroko abrahama
								</LinkMUI>
								, kateri z dobro glasbo in pozitivno energijo naredi njihov dogodek še bistveno bolj
								prijeten in svečan.
							</p>
							<p>
								Literaturo za učenje kitare najdeš tukaj{' '}
								<Link href="/pesmi/vse-najboljse-za-te---ucenje-kitare,-lekcija-akordi-za-kitaro-288">
									<a>Vse najboljše - chords and lyrics</a>
								</Link>
							</p>
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion component="article">
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography className={classes.heading}>
						Lekcija za kitaro Sreča na vrvici (Srednje zahtevna lekcija)
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Grid container justify="center" className={classes.blogMedia}>
							<Grid item xs={10}>
								{responsiveYoutube('https://www.youtube.com/embed/Qdji1IbMIe0')}
							</Grid>
						</Grid>
						<Typography variant="h6" component="h3">
							Sreča na vrvici akordi in lekcija za kitaro, tablature (Chords, Lyrics, Tabs)
						</Typography>
						<Typography variant="subtitle2" component="p">
							<p>
								V interaktivni kitarski lekciji se učimo pesem Sreča na vrvici, prijemi akordov,
								napredne ritme igranja, napredne tehnike igranja kitare (pok strun, zatiranje zvoka
								strun..) in mnogo več.
							</p>

							<p>
								Note in akorde najdeš preko portala, ali preko linka{' '}
								<Link href="/pesmi/sreca-na-vrvici-akordi-za-kitaro-284">
									<a>Sreča na vrvici - chords & lyrics</a>
								</Link>
							</p>
						</Typography>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</Grid>
	);

	function allTimeMostSongsArtists(songs) {
		return (
			<List dense>
				{songs.map((song, i) => (
					<Link key={i} href={artistToUrl(song.author)}>
						<ListItem button>
							<ListItemAvatar>
								<Avatar alt={` ${song.author} - zbirka akordov`} src={''} />
							</ListItemAvatar>
							<ListItemText id={song.id_song} primary={song.author} secondary={`#${i + 1}`} />
							<ListItemText
								id={song.id_song}
								secondary={song.countSongs + ' pesmi'}
								className={classes.listViews}
							/>
						</ListItem>
					</Link>
				))}
			</List>
		);
	}

	function allTimePopularArtists(songs) {
		return (
			<List dense>
				{songs.map((song, i) => (
					<Link key={i} href={artistToUrl(song.author)}>
						<ListItem button>
							<ListItemAvatar>
								<Avatar
									alt={`${song.author} popularni izvajalci pesmi akordov besedil`}
									src={`${process.env.NEXT_PUBLIC_WEBSERVER}/api/images/${song.youtube_image_name}`}
								/>
							</ListItemAvatar>
							<ListItemText id={song.id_song} primary={song.author} secondary={`#${i + 1}`} />
							<ListItemText
								id={song.id_song}
								secondary={song.sumViews + ' ogledov'}
								className={classes.listViews}
							/>
						</ListItem>
					</Link>
				))}
			</List>
		);
	}

	return (
		<Layout>
			<Head>
				<title>BESEDILO PESMI AKORDI TABLATURE | Lyrics Chords Text Tekst Tabs</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="BESEDILO PESMI AKORDI TABLATURE. Besedila Akordi Tabs za najboljše kul pesmi. Besedilo (lyrics, tekst, text) Akordi (chords) za kitaro, ukulele, harmoniko, klavir."
				/>
				<meta
					name="keywords"
					content="Pesem, Besedilo, Besedila pesmi, akordi za kitaro ukulele klavir harmoniko,  lyrics, tabs, chords, text, tekst, učenje kitare, 
					e glasbena šola
					"
				/>
			</Head>
			<Typography gutterBottom variant="h4" component="h1">
				BESEDILA PESMI AKORDI ZA KITARO:
			</Typography>
			<Typography
				gutterBottom
				variant="h6"
				component="h2"
				color="secondary"
				style={{ marginTop: theme.spacing(1) }}
			>
				BESEDILA PESMI AKORDI ZA KITARO BESEDILA PESMI AKORDI ZA KITARO:
			</Typography>

			<Typography variant="caption" component="p" align="justify">
				Glasbeni portal Pesmi Besedilo Akordi Tablature je baza pesmi v kateri lahko poiščete: Akorde (Chords),
				Besedilo (lyrics, text, tekst), Tablature (tabs) &amp; video spot vaše najlepše pesmi. Poleg gledanja
				video spota lahko prepevate besedilo, akordi pa so namenjeni za kitaro, ukulele, harmoniko, klavir.
			</Typography>

			<section style={{ marginTop: theme.spacing(4) }}>
				<Categories />
			</section>

			<Grid container style={{ marginTop: theme.spacing(6) }} spacing={6}>
				<Grid item xs={12} md={7}>
					<Typography variant="body1" color="textPrimary" gutterBottom>
						Dobrodošli na portal (izdelovanje)
					</Typography>
					<Typography variant="caption" component="p" align="justify">
						Portal za besedila in akorde je še vedno v stopnji izdelovanja in so zato nekatere funkcije
						onemogočene ali pa se še implementirajo. Dokler dokončujemo portal vam kjub temu želimo prijetno
						uporabo. Če najdete na strani kakšno napako, bomo veseli, če nam jo posredujete na email:{' '}
						<LinkMUI href="mailto:tim.androja@gmail.com" target="_blank">
							tim.androja@gmail.com{' '}
						</LinkMUI>
					</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<LinkMUI href="https://ansambel-objem.si/" target="_blank" rel="nofollow">
						<Image src="/banner.jpg" layout="responsive" alt="oglas1" width={600} height={150} />{' '}
					</LinkMUI>
				</Grid>
			</Grid>
			<Typography
				gutterBottom
				variant="h6"
				component="h3"
				color="secondary"
				style={{ marginTop: theme.spacing(4) }}
			>
				NOVO DODANI AKORDI:
			</Typography>
			<Divider />

			<Container disableGutters maxWidth={false} className={classes.carouselMargin}>
				<SongCarousel songs={newSongs} />
			</Container>

			<Container disableGutters maxWidth="xl">
				<Grid container className={classes.containerMargin} spacing={4}>
					<Grid item xs={12} md={6}>
						<Grid container>
							<Image src="/oglas1.png" alt="oglas1" width={700} height={200} />
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}>
						<div>
							<Typography variant="h6" component="h3">
								OPIS GLASBENEGA PORTALA ZA PESMI IN AKORDE:
							</Typography>
							<p>
								<Typography variant="body2" component="p" align="justify">
									PESMI GLASBA BESEDILA AKORDI za kitaro aktualnih ansamblov, bandov, glasbenih
									skupin, glasbenikov in pevcev. Za vas smo izdelali glasbeni portal, na katerem lahko
									istočasno gledate videospot ter spremljate besedilo, akorde in tablaturo vaše
									prilubljene skladbe. Vabimo vas, da tudi vi prispevate vaše pesmi z akordi in
									besedilom ter povezavo do ustreznega videa in tako pomagate tudi drugim pri igranju
									in učenju na vaše pesmi. Naj vam bo naš portal v pomoč in vam želimo veliko
									glasbenih užitkov.
								</Typography>
							</p>
							<Grid container>
								<Button
									disabled
									variant="contained"
									color="primary"
									className={classes.button}
									endIcon={<AddIcon />}
								>
									Dodaj Akorde
								</Button>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Container disableGutters maxWidth={false}>
				<Typography variant="h6" component="h3" className={classes.containerMargin} color="secondary">
					POPULARNO TA TEDEN:
				</Typography>
				<Divider />
				<Container disableGutters maxWidth={false} className={classes.carouselMargin}>
					<SongCarousel songs={curentlyPopularSongs} />
				</Container>
			</Container>
			<Container disableGutters maxWidth={false}>
				<Typography variant="h6" component="h3" className={classes.containerMargin} color="secondary">
					NAJVEČKRAT OGLEDANI AKORDI:
				</Typography>
				<Divider />
				<Container disableGutters maxWidth={false} className={classes.carouselMargin}>
					<SongCarousel songs={mostViewedSongs} />
				</Container>
			</Container>
			<Container maxWidth="lg" disableGutters className={classes.containerMargin}>
				<Grid container spacing={10}>
					<Grid item xs={12} md={6} component="section">
						<Link href="#">
							<LinkMUI href="#">
								<Typography gutterBottom variant="h6" component="h3">
									NAJBOLJ POPULARNI IZVAJALCI:
								</Typography>
							</LinkMUI>
						</Link>
						{allTimePopularArtists(popularArtists)}
					</Grid>
					<Grid item xs={12} md={6} component="section">
						<Link href="#">
							<LinkMUI variant="h6" href="#">
								<Typography gutterBottom variant="h6" component="h3">
									IZVAJALCI Z NAJVEČ AKORDI:
								</Typography>
							</LinkMUI>
						</Link>
						{allTimeMostSongsArtists(mostSongsArtists)}
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth={false} className={classes.containerMargin} component="section">
				<Typography gutterBottom variant="h6" component="h3">
					Dodatne informacije portala:
				</Typography>
				<Typography gutterBottom variant="body2" component="p" align="justify">
					AKORDI ZA KITARO IN BESEDILA PESMI popularnih aktualnih ansamblov, bandov, glasbenih skupin,
					glasbenikov in pevcev. Glasbeni portal je namenjen vsem ljubiteljem slovenske in ostale glasbe, ki
					želijo poleg besedila posamezne pesmi imeti še pripadajoče akorde za to pesem. Akordi vam bodo v
					pomoč pri učenju: kitare, klaviature, klavirja, sintesajzerja, harmonike ipd. tako da lahko svojo
					priljubljeno pesem pojete in istočasno spremljate na svojem glasbenem instrumentu. Določene pesmi
					poleg prijemov za kitaro vsebujejo tudi tablature za kitaro katere veliko kitaristov uporablja
					namesto not, da pridobi lažjo in hitrejšo orientacijo. Na portalu so zbrana raznovrstna besedila
					pesmi z akordi, zato sva jih razvrstila v 8 glasbenih skupin: Slovenske pesmi, Angleške pesmi,
					Otroške pesmice, Božične pesmi, Hrvaške pesmi, Ljudske pesmi, Slovenska popevka, in Narodno zabavna
					glasba. Zaradi enostavnost iskanja lahko določeno pesem najdete v različnih glasbenih skupinah npr:
					Pesem V dolini tihi spada pod v katregoriji Narodno zabavna glasba in Slovenske pesmi.
				</Typography>
				<Typography gutterBottom variant="body2" component="p" align="justify">
					Posebnost glasbenega portala AKORDI ZA KITARO BESEDILA pesmi je ta, da na njem lahko istočasno
					gledate videospot ter spremljate besedilo, akorde in tablaturo vaše prilubljene skladbe. Vabimo vas,
					da tudi vi prispevate priljubljene pesmi z akordi in besedilom ter povezavo do ustreznega videa. Naj
					vam bo naš portal v pomoč pri igranju kitare, klaviature, harmonike oziroma drugega akordičnega
					glasbila. Avtorja portala Tim & Tugomir Androja vam želiva veliko glasbenih užitkov.
				</Typography>
			</Container>
			<section>
				<Typography gutterBottom variant="h4" component="h3" className={classes.containerMargin}>
					GLASBENI ČLANKI:
				</Typography>
				<Grid container>
					<Divider />
					{blog}
				</Grid>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/index');
	const indexData = await res.json();
	const newSongs = indexData[0];
	const curentlyPopularSongs = indexData[1];
	const popularArtists = indexData[2];
	const mostViewedSongs = indexData[3];
	const mostSongsArtists = indexData[4];

	return {
		props: {
			newSongs,
			curentlyPopularSongs,
			popularArtists,
			mostViewedSongs,
			mostSongsArtists
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 360 // In seconds
	};
}
