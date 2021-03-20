import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "../styles/theme";
import Link from "next/link";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
const Diacritics = require("diacritic");
const useStyles = makeStyles({
  cardWrapper: {
    outline: "none",
    paddingLeft: theme.spacing(0.6),
    paddingRight: theme.spacing(0.6),
  },
  cardContent: {
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
  },
  carouselWrapper: {
    padding: theme.spacing(2, 1),
  },
  paddingWrapper: {
    margin: theme.spacing(0, 1),
  },
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightRoundedIcon
      className={className}
      color="primary"
      fontSize="large"
      style={{
        ...style,
        color: theme.palette.primary.main,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftRoundedIcon
      className={className}
      color="primary"
      fontSize="large"
      style={{ ...style, color: theme.palette.primary.main }}
      onClick={onClick}
    />
  );
}

export default function SongCarouselSmall({ songs }) {
  const classes = useStyles();
  function songToUrl(title, id) {
    return (
      "/pesmi/" +
      Diacritics.clean(title)
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase() +
      "-besedilo-akordi-chords-lyrics-tekst-" +
      id
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    arrows: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <article className={classes.paddingWrapper}>
      <Slider {...settings} className={classes.carouselWrapper}>
        {songs.map((song) => (
          <Grid item key={song.id_song} className={classes.cardWrapper}>
            <Link href={songToUrl(song.title, song.id_song)}>
              <Card component="article" elevation={1}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={`${song.title} akordi pesmi ${song.author}`}
                    height="140"
                    image={`${process.env.NEXT_PUBLIC_WEBSERVER}/api/images/${song.youtube_image_name}`}
                    title={`${song.title} akordi pesmi ${song.author}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <header>
                      <Typography variant="subtitle2" component="h3" noWrap>
                        {song.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h4"
                        noWrap
                      >
                        {song.author.length > 0
                          ? song.author
                          : "Neznan izvajalec"}
                      </Typography>
                    </header>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Slider>
    </article>
  );
}
