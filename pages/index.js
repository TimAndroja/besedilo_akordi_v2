import Head from "next/head";
import Layout from "../components/Layout";
import SongCarousel from "../components/SongCarousel";
import SongCarouselSmall from "../components/SongCarouselSmall";
import Categories from "../components/Categories";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import theme from "../styles/theme";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Image from "next/image";
import Link from "next/link";
import LinkMUI from "@material-ui/core/Link";
import GridList from "@material-ui/core/GridList";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

const Diacritics = require("diacritic");
const useStyles = makeStyles({
  cardContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.4),
    paddingBottom: theme.spacing(1.4),
  },
  containerMargin: {
    marginTop: theme.spacing(4),
    padding: 0,
  },
  carouselMargin: {
    marginBottom: theme.spacing(4),
  },

  blogMedia: {
    padding: theme.spacing(4),
  },

  listViews: { textAlign: "right" },
  opisPortala: {
    width: "90%",
    margin: "auto",
  },

  cardWrapper: {
    outline: "none",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
});

export default function index({
  newSongs,
  curentlyPopularSongs,
  popularArtists,
  mostViewedSongs,
  mostSongsArtists,
}) {
  function artistToUrl(string) {
    return (
      "/izvajalci/" +
      Diacritics.clean(string)
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase() +
      "-pesmi-akordi-besedila-skladbe"
    );
  }

  function responsiveYoutube(url) {
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
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
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
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
                <strong>Major</strong> po slovensko pomeni <strong>Dur</strong>{" "}
                (A Major = A Dur)
              </li>
              <li>
                <strong>Minior</strong> po slovensko pomen <strong>Mol</strong>{" "}
                (A Minior = A Mol)
              </li>
              <li>
                Znak <strong>O</strong> na sliki pomeni, da kitarsko struno{" "}
                <strong>igramo</strong>, vendar na njej nimamo položenega
                nobenega prsta{" "}
              </li>
              <li>
                Znak <strong>X</strong> na sliki pomeni, da strune kitare{" "}
                <strong>neigramo</strong>
              </li>
              <li>
                <strong>B Major</strong> in <strong>B Minior</strong> v
                slovenskem jeziku pomenita <strong>H Dur</strong> in{" "}
                <strong>H Mol</strong>
              </li>
              <br />
              <strong>Navodila za uporabo:</strong>
              <p>
                Na zgornji tablaturi, izberemo akordi, ki ga bomo zaigrali na
                električni ali akustični kitari. Na kitaro položimo prste
                sledeče po številkah: Prste začnemo šteti s kazalcem, ta ima
                številko 1 in tako naprej, kot je prikazano na zgornji
                tablaturi(1-kazalec, 2-sredinec, 3-prstanec, 4-mezinec). Ko
                imamo vse prste na pravilnih strunah, zabrenkamo na vse strune,
                razen tiste, ki so označene s simbolom <strong>X</strong>. Pod
                vsako sliko imaš pod struno označeno kateri ton igraš na kitari.
              </p>
            </Typography>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion component="article">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Vse najboljše kitarska lekcija (Chords, Lyrics, Tabs)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid container justify="center" className={classes.blogMedia}>
              <Grid item xs={10}>
                {responsiveYoutube("https://www.youtube.com/embed/D6uG69aL3VQ")}
              </Grid>
            </Grid>
            <Typography variant="h6" component="h3">
              Vse najbolješ kitarska lekcija (Chords, Lyrics, Tabs)
            </Typography>
            <Typography variant="subtitle2" component="p">
              <p>
                V interaktivni kitarski lekciji se boš nauči Osnoven ritem
                igranja, napreden ritem igranja, štetje in poudarjanje ritma,
                osnovne akorde, Igranje melodije, pridobil ogromno glasbenega
                znanja, napotkov in trikov pri učenju kitare in še mnogo več.
              </p>
              <p>
                Lekcijo za portal BESEDILO-AKORDI pripravil{" "}
                <LinkMUI
                  href="https://ansambel-objem.si/ucenje-sola-kitare-sintesajzerja"
                  target="blank"
                >
                  glasbeni mentor Tugomir Androja
                </LinkMUI>
                , vodja ansambla skupine Objem. Glasbena{" "}
                <LinkMUI href="https://ansambel-objem.si/" target="_blank">
                  skupina Objem
                </LinkMUI>{" "}
                je že mnogo let znana na področju igranja porok, kot vodilni
                slovenski{" "}
                <LinkMUI
                  href="https://ansambel-objem.si/poroka-band-za-poroko/"
                  target="_blank"
                >
                  poročni band
                </LinkMUI>
                . Glasbeniki – muzikanti glasbene skupine Objem, že tretje
                desetletje razveseljujejo svoje naročnike po celotni Sloveniji
                in jih naročniki z veseljem najamejo, kot dober{" "}
                <LinkMUI
                  href="https://ansambel-objem.si/abraham-ansambel-za-abrahama/"
                  target="_blank"
                >
                  bend ansambel za poroko abrahama
                </LinkMUI>
                , kateri z dobro glasbo in pozitivno energijo naredi njihov
                dogodek še bistveno bolj prijeten in svečan.
              </p>
              <p>
                Literaturo za učenje kitare najdeš tukaj{" "}
                <Link href="/pesmi/vse-najboljse-za-te---ucenje-kitare,-lekcija-akordi-za-kitaro-288">
                  <a>Vse najboljše - chords and lyrics</a>
                </Link>
              </p>
            </Typography>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion component="article">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Lekcija za kitaro Sreča na vrvici (Srednje zahtevna lekcija)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid container justify="center" className={classes.blogMedia}>
              <Grid item xs={10}>
                {responsiveYoutube("https://www.youtube.com/embed/Qdji1IbMIe0")}
              </Grid>
            </Grid>
            <Typography variant="h6" component="h3">
              Sreča na vrvici akordi in lekcija za kitaro, tablature (Chords,
              Lyrics, Tabs)
            </Typography>
            <Typography variant="subtitle2" component="p">
              <p>
                V interaktivni kitarski lekciji se učimo pesem Sreča na vrvici,
                prijemi akordov, napredne ritme igranja, napredne tehnike
                igranja kitare (pok strun, zatiranje zvoka strun..) in mnogo
                več.
              </p>

              <p>
                Note in akorde najdeš preko portala, ali preko linka{" "}
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
      <GridList cols={2} cellHeight="auto">
        {songs.map((song, i) => (
          <Grid item key={index} key={i} sm={12} md={6}>
            <Link key={i} href={artistToUrl(song.author)}>
              <ListItem button dense>
                <ListItemAvatar>
                  <Avatar
                    alt={`${song.author} - zbirka akordov`}
                    src={"test"}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={song.id_song}
                  primary={song.author}
                  secondary={song.countSongs + " pesmi"}
                />
              </ListItem>
            </Link>
          </Grid>
        ))}
      </GridList>
    );
  }

  function allTimePopularArtists(songs) {
    return (
      <GridList cols={2} cellHeight="auto">
        {songs.map((song, i) => (
          <Grid item key={index} key={i} sm={12} md={6}>
            <Link href={artistToUrl(song.author)}>
              <ListItem button dense>
                <ListItemAvatar>
                  <Avatar
                    alt={`${song.author} popularni izvajalci pesmi akordov besedil`}
                    src={`test`}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={song.id_song}
                  primary={song.author}
                  secondary={song.sumViews + " ogledov"}
                />
              </ListItem>
            </Link>
          </Grid>
        ))}
      </GridList>
    );
  }

  return (
    <Layout>
      <Head>
        <title>
          BESEDILO PESMI AKORDI TABLATURE | Lyrics Chords Text Tekst Tabs
        </title>
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
      <Box marginTop={0}>
        <Box>
          <Typography variant="h1" component="h1" align="center">
            <strong>BESEDILO PESMI AKORDI TABLATURE </strong>
          </Typography>
        </Box>

        <Box marginTop={1.5}>
          <Divider />
          <Typography variant="overline" align="center" component="h2">
            BESEDILO PESMI AKORDI TABLATURE ZA KITARO (Lyrics Chords Text Tekst
            Tabs)
          </Typography>
          <Divider />
        </Box>
      </Box>
      <Box component="section" marginTop={5}>
        <Categories />
      </Box>
      <Box marginTop={5}>
        <Typography variant="overline">NOVO DODANO:</Typography>
        <Divider />
        <Container
          disableGutters
          maxWidth={false}
          className={classes.carouselMargin}
        >
          <SongCarousel songs={newSongs} />
        </Container>
      </Box>
      <Box marginTop={9}>
        <Grid container>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="overline">NAJBOLJ GLEDANI:</Typography>
                <Divider />
                {allTimePopularArtists(popularArtists)}
              </Box>
            </Grid>
            <Hidden xsDown>
              <Grid item sm={6}>
                <Box>
                  <Typography variant="overline">NAJVEČJA ZBIRKA:</Typography>
                  <Divider />
                  {allTimeMostSongsArtists(mostSongsArtists)}
                </Box>
              </Grid>
            </Hidden>
          </Grid>

          <Grid container spacing={8} style={{ marginTop: theme.spacing(6) }}>
            <Grid item xs={12} md={6}>
              <Box>
                <Container disableGutters maxWidth={false}>
                  <Typography variant="overline">
                    POPULARNO TA TEDEN:
                  </Typography>
                  <Divider />
                  <Container
                    disableGutters
                    maxWidth={false}
                    className={classes.carouselMargin}
                  >
                    <SongCarouselSmall songs={curentlyPopularSongs} />
                  </Container>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="overline">OPIS PORTALA</Typography>
                <Divider />
                <Box marginTop={1}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    align="justify"
                  >
                    PESMI GLASBA BESEDILA AKORDI za kitaro aktualnih ansamblov,
                    bandov, glasbenih skupin, glasbenikov in pevcev. Za vas smo
                    izdelali glasbeni portal, na katerem lahko istočasno gledate
                    videospot ter spremljate besedilo, akorde in tablaturo vaše
                    prilubljene skladbe.
                  </Typography>
                  <Typography variant="body2" component="p" align="justify">
                    Vabimo vas, da tudi vi prispevate vaše pesmi z akordi in
                    besedilom ter povezavo do ustreznega videa in tako pomagate
                    tudi drugim pri igranju in učenju na vaše pesmi. Naj vam bo
                    naš portal v pomoč in vam želimo veliko glasbenih užitkov.
                  </Typography>
                  <Box textAlign="center" marginTop={1}>
                    <Button
                      fullWidth
                      disabled
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<AddIcon />}
                    >
                      Dodaj Akorde
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={8} style={{ marginTop: theme.spacing(6) }}>
            <Grid item xs={12} md={6}>
              <Box>
                <Container disableGutters maxWidth={false}>
                  <Typography variant="overline">
                    NAJVEČKRAT OGLEDANO:
                  </Typography>
                  <Divider />
                  <Container
                    disableGutters
                    maxWidth={false}
                    className={classes.carouselMargin}
                  >
                    <SongCarouselSmall songs={mostViewedSongs} />
                  </Container>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box marginTop={3.4}>
                <LinkMUI
                  href="https://ansambel-objem.si/"
                  target="_blank"
                  rel="nofollow"
                >
                  <Image
                    src="/banner-objem.jpg"
                    layout="responsive"
                    alt="oglas1"
                    width={600}
                    height={200}
                  />{" "}
                </LinkMUI>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box marginTop={8}>
        <Grid container spacing={9}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box>
                  <Typography variant="overline">
                    DODATNE INFORMACIJE
                  </Typography>
                  <Divider />
                  <Box marginTop={1}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      align="justify"
                    >
                      Glasbeni portal Besedilo Pesmi Akordi Tablature je baza
                      pesmi v kateri lahko poiščete: Akorde (Chords), Besedilo
                      (lyrics, text, tekst), Tablature (tabs) &amp; video spot
                      vaše najlepše pesmi. Poleg gledanja video spota lahko
                      prepevate besedilo, akordi pa so namenjeni za kitaro,
                      ukulele, harmoniko, klavir.
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      align="justify"
                    >
                      AKORDI ZA KITARO IN BESEDILA PESMI popularnih aktualnih
                      ansamblov, bandov, glasbenih skupin, glasbenikov in
                      pevcev. Glasbeni portal je namenjen vsem ljubiteljem
                      slovenske in ostale glasbe, ki želijo poleg besedila
                      posamezne pesmi imeti še pripadajoče akorde za to pesem.
                      Akordi vam bodo v pomoč pri učenju: kitare, klaviature,
                      klavirja, sintesajzerja, harmonike ipd. tako da lahko
                      svojo priljubljeno pesem pojete in istočasno spremljate na
                      svojem glasbenem instrumentu. Določene pesmi poleg
                      prijemov za kitaro vsebujejo tudi tablature za kitaro
                      katere veliko kitaristov uporablja namesto not, da pridobi
                      lažjo in hitrejšo orientacijo. Na portalu so zbrana
                      raznovrstna besedila pesmi z akordi, zato sva jih
                      razvrstila v 8 glasbenih skupin: Slovenske pesmi, Angleške
                      pesmi, Otroške pesmice, Božične pesmi, Hrvaške pesmi,
                      Ljudske pesmi, Slovenska popevka, in Narodno zabavna
                      glasba. Zaradi enostavnost iskanja lahko določeno pesem
                      najdete v različnih glasbenih skupinah npr: Pesem V dolini
                      tihi spada pod v katregoriji Narodno zabavna glasba in
                      Slovenske pesmi.
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      align="justify"
                    >
                      Posebnost glasbenega portala AKORDI ZA KITARO BESEDILA
                      pesmi je ta, da na njem lahko istočasno gledate videospot
                      ter spremljate besedilo, akorde in tablaturo vaše
                      prilubljene skladbe. Vabimo vas, da tudi vi prispevate
                      priljubljene pesmi z akordi in besedilom ter povezavo do
                      ustreznega videa. Naj vam bo naš portal v pomoč pri
                      igranju kitare, klaviature, harmonike oziroma drugega
                      akordičnega glasbila. Avtorja portala Tim & Tugomir
                      Androja vam želiva veliko glasbenih užitkov.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box marginTop={6}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          className={classes.containerMargin}
        >
          GLASBENI ČLANKI:
        </Typography>
        <Grid container>
          <Divider />
          {blog}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WEBSERVER + "/api/songs/index"
  );
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
      mostSongsArtists,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 360, // In seconds
  };
}
