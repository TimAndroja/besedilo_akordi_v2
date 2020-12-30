import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import theme from '../styles/theme';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';
import Slider from 'react-slick';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
const Diacritics = require('diacritic');
const useStyles = makeStyles({
	cardWrapper: {
		outline: 'none',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1)
	}
});

export default function SongCarousel({ songs }) {
	const classes = useStyles();
	function songToUrl(title, id) {
		return (
			'/pesmi/' +
			Diacritics.clean(title).replace(/[^a-z0-9]/gi, '-').toLowerCase() +
			'-besedilo-akordi-chords-lyrics-tekst-' +
			id
		);
	}
	const settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			}
		]
	};
	return (
		<article>
			<Slider {...settings}>
				{songs.map((song) => (
					<Grid item key={song.id_song} className={classes.cardWrapper}>
						<Link href={songToUrl(song.title, song.id_song)}>
							<Card component="article">
								<CardActionArea>
									<CardMedia
										component="img"
										alt={`${song.title} akordi pesmi ${song.author}`}
										height="160"
										image={`${process.env
											.NEXT_PUBLIC_WEBSERVER}/api/images/${song.youtube_image_name}`}
										title={`${song.title} akordi pesmi ${song.author}`}
									/>
									<CardContent className={classes.cardContent}>
										<header>
											<Typography variant="subtitle2" component="h3" noWrap>
												{song.title}
											</Typography>
											<Typography variant="body2" color="textSecondary" component="h4" noWrap>
												{song.author.length > 0 ? song.author : 'Neznan izvajalec'}
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
