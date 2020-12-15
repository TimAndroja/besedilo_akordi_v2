import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/theme';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	formControl: {
		margin: theme.spacing(0),
		minWidth: 120
	}
});

function youtubeToEmbed(youtubeUrl) {
	return youtubeUrl.replace('watch?v=', 'embed/');
}

export default function ChordsLeftSide({ songContent }) {
	const classes = useStyles();
	return (
		<Grid container spacing={4}>
			<Grid item sm={11}>
				<FormControl className={classes.formControl} style={{ marginBottom: theme.spacing(1) }}>
					<Select defaultValue={1} id="grouped-select">
						<ListSubheader>Category 1</ListSubheader>
						<MenuItem value={1}>Verzija 1</MenuItem>
						<MenuItem value={2}>Verzija 2</MenuItem>
						<ListSubheader>Category 2</ListSubheader>
						<MenuItem value={3}>Verzija 3</MenuItem>
						<MenuItem value={4}>Verzija 4</MenuItem>
					</Select>
				</FormControl>
				<header>
					<Typography variant="h6" component="h1">
						<strong style={{ color: theme.palette.secondary.main }}>
							{songContent.title.toUpperCase()}
						</strong>{' '}
						Besedilo Akordi (lyrics, text, tabs, chords) <strong>-</strong>{' '}
						<strong style={{ color: theme.palette.secondary.main }}>{songContent.author}</strong>
					</Typography>
					<Typography variant="caption" component="h2" gutterBottom>
						<strong>{songContent.title.toUpperCase()}</strong> Besedilo Akordi. (text, tekst, chords, tabs,
						tablature, lyrics)
					</Typography>
				</header>
				<Box marginBottom={1}>
					<Typography variant="caption" component="h2" color="textSecondary">
						{songContent.title} {songContent.author} - Video spot
					</Typography>
					<iframe
						loading="lazy"
						title={`${songContent.title} ${songContent.author} - Video spot`}
						width="392"
						height="238"
						src={youtubeToEmbed(songContent.youtube)}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen=""
						data-rocket-lazyload="fitvidscompatible"
						style={{}}
						data-ll-status="loaded"
					/>
				</Box>
				<Typography component="p" variant="body2">
					{songContent.title} Besedilo Akordi (lyrics, text, text chords). Izvajalec: {songContent.author}.
					Besedilo pesmi z akordi (prijemi) za kitaro, ukulele, klavir, harmoniko.
				</Typography>
			</Grid>
			<Grid item sm={1}>
				<Divider orientation="vertical" />
			</Grid>
		</Grid>
	);
}
