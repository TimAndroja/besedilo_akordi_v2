import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/theme';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Image from 'next/image';
import MLink from '@material-ui/core/Link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChordDiagram from '../components/ChordDiagram';
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
			<Typography component="p" variant="button">
				<Box marginBottom={1}>
					Izvajalca{' '}
					<Link href={artistToUrl(songContent.author)}>
						<MLink href="">{songContent.author}</MLink>
					</Link>{' '}
					in druge podobne pesmi lahko najdete tudi v kategorijah:{' '}
				</Box>
				<List style={{ backgroundColor: theme.palette.background.paper }}>
					{songContent.lekcija ? (
						<Link href="/kategorija/ucenje-igranje-sola-kitare">
							<ListItem button>
								<MLink href="">Kitarske lekcije</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.slovenska ? (
						<ListItem button>
							<Link href="/kategorija/slovenske-pesmi">
								<MLink href="">Slovenske zabavne pesmi</MLink>
							</Link>{' '}
						</ListItem>
					) : (
						''
					)}
					{songContent.dalmatinska ? (
						<Link href="/kategorija/hrvaske-dalmatinske-pesmi-hrvaska-dalmatinska-glasba">
							<ListItem button>
								<MLink href="">Hrvaške pesmi</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.tuja ? (
						<Link href="/kategorija/ostalo-angleske-disco-pesmi-instrumentalna-klasicna-glasba">
							<ListItem button>
								<MLink href="">Ostale pesmi</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.narodna ? (
						<Link href="/kategorija/narodno-zabavna-domaca-glasba">
							<ListItem button>
								<MLink href="">Narodno zabavna glasba</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.otroska ? (
						<Link href="/kategorija/slovenske-otroske-pesmi-za-otroke">
							<ListItem button>
								<MLink href="">Otroške pesmi</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.bozicna ? (
						<Link href="/kategorija/bozicne-pesmi-bozicna-glasba">
							<ListItem button>
								<MLink href="">Bozične pesmi</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.popevka ? (
						<Link href="/kategorija/slovenska-popevka-plesna-glasba">
							<ListItem button>
								<MLink href="">Slovenska popevka</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.ljudska ? (
						<Link href="/kategorija/slovenske-ljudske-pesmi-ljudska-glasba">
							<ListItem button>
								<MLink href="">Ljudske pesmi</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
					{songContent.rock ? (
						<Link href="/kategorija/pop-rock-gasba-ex-yu-yugo">
							<ListItem button>
								<MLink href="">Pop rock glasba</MLink>
							</ListItem>
						</Link>
					) : (
						''
					)}
				</List>
			</Typography>
		</section>
	);
	const description =
		songContent.description != null ? (
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
					<Typography>OPIS</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component="p">{songContent.description}</Typography>
				</AccordionDetails>
			</Accordion>
		) : (
			''
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
				allowFullScreen
				title={`${songContent.title} besedilo akordi ${songContent.author} chords lyrics text tekst tablature tabs`}
			/>
		</div>
	);

	return (
		<Grid container>
			<Grid item xs={12} />
			<Grid item xs={12}>
				<Box marginBottom={3}>
					<Grid container>
						<Typography variant="overline" component="h3" color="textSecondary">
							{songContent.title} {songContent.author} - Video spot
						</Typography>
						<Grid item xs={12}>
							{responsiveYoutube}
						</Grid>
					</Grid>
				</Box>
				<Box marginBottom={2}>
					<Typography component="p" variant="caption">
						{songContent.title} Besedilo Akordi (lyrics, text, text chords). Izvajalec: {songContent.author}{' '}
						Besedilo pesmi z akordi (prijemi) za kitaro, ukulele, klavir, harmoniko.
					</Typography>
				</Box>
				<Box marginBottom={2}>
					<MLink href="https://ansambel-objem.si/" target="_blank" rel="nofollow">
						<Image src="/banner-objem.jpg" layout="responsive" alt="oglas1" width={600} height={180} />{' '}
					</MLink>
				</Box>
				<Box marginBottom={2}>
					<ChordDiagram />
				</Box>
				<Box marginBottom={1}>{kategorije}</Box>
				<Box marginBottom={1}>{description}</Box>
			</Grid>
		</Grid>
	);
}
