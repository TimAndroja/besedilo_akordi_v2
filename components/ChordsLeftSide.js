import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/theme';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';
import MLink from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';
const Diacritics = require('diacritic');
const useStyles = makeStyles({
	formControl: {
		margin: theme.spacing(0),
		minWidth: 120
	}
});

function youtubeToEmbed(youtubeUrl) {
	return youtubeUrl.replace('watch?v=', 'embed/');
}
function artistToUrl(string) {
	return (
		'/izvajalci/' +
		Diacritics.clean(string).replace(/[^a-z0-9]/gi, '-').toLowerCase() +
		'-pesmi-akordi-besedila-skladbe'
	);
}

export default function ChordsLeftSide({ songContent }) {
	const kategorije = (
		<section>
			Izvajalca{' '}
			<Link href={artistToUrl(songContent.author)}>
				<MLink href="">{songContent.author}</MLink>
			</Link>{' '}
			in druge podobne pesmi lahko najdete tudi v kategorijah:{' '}
			{songContent.lekcija ? (
				<span>
					<Link href="/kategorija/ucenje-igranje-sola-kitare">
						<MLink href="">Kitarske lekcije</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.slovenska ? (
				<span>
					<Link href="/kategorija/slovenske-pesmi">
						<MLink href="">Slovenske zabavne pesmi</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.dalmatinska ? (
				<span>
					<Link href="/kategorija/hrvaske-dalmatinske-pesmi-hrvaska-dalmatinska-glasba">
						<MLink href="">Hrvaške pesmi</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.tuja ? (
				<span>
					<Link href="/kategorija/ostalo-angleske-disco-pesmi-instrumentalna-klasicna-glasba">
						<MLink href="">Ostale pesmi</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.narodna ? (
				<span>
					<Link href="/kategorija/narodno-zabavna-domaca-glasba">
						<MLink href="">Narodno zabavna glasba</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.otroska ? (
				<span>
					<Link href="/kategorija/slovenske-otroske-pesmi-za-otroke">
						<MLink href="">Otroške pesmi</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.bozicna ? (
				<span>
					<Link href="/kategorija/bozicne-pesmi-bozicna-glasba">
						<MLink href="">Bozične pesmi</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.popevka ? (
				<span>
					<Link href="/kategorija/slovenska-popevka-plesna-glasba">
						<MLink href="">Slovenska popevka</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.ljudska ? (
				<span>
					<Link href="/kategorija/slovenske-ljudske-pesmi-ljudska-glasba">
						<MLink href="">Ljudske pesmi</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
			{songContent.rock ? (
				<span>
					<Link href="/kategorija/pop-rock-gasba-ex-yu-yugo">
						<MLink href="">Pop rock glasba</MLink>
					</Link>{' '}
				</span>
			) : (
				''
			)}
		</section>
	);
	const classes = useStyles();
	const responsiveYoutube = (
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
				src={youtubeToEmbed(songContent.youtube)}
				frameBorder="0"
			/>
		</div>
	);

	return (
		<Grid container spacing={4}>
			<Grid item sm={12}>
				<Box marginBottom={1}>
					<header>
						<Typography variant="h5" component="h1">
							<strong style={{ color: theme.palette.secondary.main }}>
								{songContent.title.toUpperCase()}
							</strong>{' '}
							Besedilo Akordi (lyrics, text, tabs, chords) <strong>-</strong>{' '}
							<Link href={artistToUrl(songContent.author)}>
								<MLink href="">
									<strong style={{ color: theme.palette.primary.main }}>{songContent.author}</strong>
								</MLink>
							</Link>
						</Typography>
						<Typography variant="caption" component="h2" gutterBottom>
							<strong>{songContent.title.toUpperCase()}</strong> Besedilo Akordi. (text, tekst, chords,
							tabs, tablature, lyrics)
						</Typography>
					</header>
				</Box>
				<Box marginBottom={1}>
					<Typography variant="caption" component="h2" color="textSecondary">
						{songContent.title} {songContent.author} - Video spot
					</Typography>
					{responsiveYoutube}
				</Box>
				<Box marginBottom={1}>
					<Typography component="p" variant="body2">
						{songContent.title} Besedilo Akordi (lyrics, text, text chords). Izvajalec:{' '}
						<Link href={artistToUrl(songContent.author)}>
							<MLink href="">{songContent.author}</MLink>
						</Link>. Besedilo pesmi z akordi (prijemi) za kitaro, ukulele, klavir, harmoniko.
					</Typography>
				</Box>
				<Box marginBottom={1}>{kategorije}</Box>
			</Grid>
		</Grid>
	);
}
