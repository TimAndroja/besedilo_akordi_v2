import Layout from "../../components/Layout";
import { React, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChordsLeftSide from "../../components/ChordsLeftSide";
import PdfRightSide from "../../components/PdfRightSide";
import TextRightSide from "../../components/TextRightSide";
import theme from "../../styles/theme";
import Divider from "@material-ui/core/Divider";
import Head from "next/head";
import Link from "next/link";
import MLink from "@material-ui/core/Link";
import DefaultErrorPage from "next/error";
import Box from "@material-ui/core/Box";
import useSWR from "swr";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";

const Diacritics = require("diacritic");
const useStyles = makeStyles({
  listWrapper: {
    margin: theme.spacing(4, 0),
  },
  mainWrapper: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  listWrapper: {
    margin: theme.spacing(4, 0, 4, 0),
  },
});
function artistToUrl(string) {
  return (
    "/izvajalci/" +
    Diacritics.clean(string)
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase() +
    "-pesmi-akordi-besedila-skladbe"
  );
}

function Chords({ songData, id, url }) {
  useEffect(() => {
    if (songData) {
      if (localStorage["history"] == null) {
        const historyArray = [[[songData.title], [url]]];
        localStorage.setItem("history", JSON.stringify(historyArray));
      } else {
        const history = localStorage.getItem("history");
        let historyArray = JSON.parse(history);
        const newInput = [[songData.title], [url]];
        historyArray = historyArray.filter((e) => {
          return JSON.stringify(e) !== JSON.stringify(newInput);
        });
        if (historyArray.length > 10) {
          historyArray.pop();
        }
        historyArray.splice(0, 0, newInput);
        localStorage.setItem("history", JSON.stringify(historyArray));
      }
    }
  }, [url]);

  //add a view

  // Render post...
  if (!songData) {
    return (
      <div>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </div>
    );
  }
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/addview/${id}`,
    fetch
  );
  const classes = useStyles();

  const metaDescription = `${songData.title.toUpperCase()}Besedilo Akordi za kitaro. Izvajalec pesmi: ${songData.author.toUpperCase()}. Priljubljena besedila (Lyrics, Tekst, text) in Akordi (chords) pesmi. Portal besedilo-akordi.si`;
  const metaKeywords = `besedilo pesmi, akordi za kitaro ukulele klavir harmoniko, ${songData.title}${songData.author}, lyrics, tabs, chords, text, tekst, uččenje kitare e glasbena šola`;

  return (
    <Layout>
      <Head>
        <title>
          {songData.title.toUpperCase()} Besedilo Akordi za kitaro | Izvajalec
          pesmi: {songData.author.toUpperCase()}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Head>
      <Grid container>
        <Grid item xs={12}>
          <Box marginBottom={3}>
            <header>
              <Box
                display="flex"
                style={{ gap: theme.spacing(4) }}
                justifyContent="space-between"
                alignItems="center"
                mb={0.2}
              >
                <Typography
                  variant="overline"
                  component="h1"
                  color="textPrimary"
                >
                  <strong style={{ color: theme.palette.primary.main }}>
                    {songData.title.toUpperCase()}
                  </strong>{" "}
                  Besedilo Akordi (lyrics, text, tabs, chords) -{" "}
                  <Link href={artistToUrl(songData.author)}>
                    <MLink href="">{songData.author.toUpperCase()}</MLink>
                  </Link>
                </Typography>
                <Typography
                  variant="overline"
                  align="right"
                  style={{
                    display: "inline-block",
                    verticalAlign: "center",
                    minWidth: "100px",
                  }}
                  component="h4"
                >
                  {songData.views}{" "}
                  <VisibilityTwoToneIcon
                    style={{ verticalAlign: "middle", fontSize: "18px" }}
                  ></VisibilityTwoToneIcon>
                </Typography>
              </Box>
              <Box marginBottom={1}>
                <Divider />
              </Box>

              <Typography variant="h4" component="h2" gutterBottom>
                <strong style={{ color: theme.palette.primary.main }}>
                  {songData.title.toUpperCase()}
                </strong>{" "}
                <strong>
                  BESEDILO AKORDI (TEXT, TEKST, CHORDS, TABS, TABLATURE, LYRICS)
                </strong>
              </Typography>
            </header>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <ChordsLeftSide songContent={songData} />
        </Grid>
        <Grid item xs={12} md={1} xl={2} />
        <Grid item xs={12} md={7} xl={6}>
          {songData.pdf_file_name ? (
            <PdfRightSide songContent={songData} />
          ) : (
            <TextRightSide songContent={songData} />
          )}
        </Grid>
      </Grid>
      <Typography variant="h4" component="h1" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/paths/songs`
  );
  const paths = await res.json();

  return {
    paths,
    fallback: "blocking",
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const url = params.id;
  const id = params.id.split("-")[params.id.split("-").length - 1];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/content/${url}`
  );
  let songData = null;
  if ((await res.status) == 400) {
    return { props: { songData, id } };
  }

  const responded = await res.json().catch((err) => console.log(err));

  songData = responded[0];

  // Pass post data to the page via props
  return { props: { songData, id, url } };
}

export default Chords;
