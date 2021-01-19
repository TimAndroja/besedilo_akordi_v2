import Layout from '../components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Songbrowser from '../components/Songbrowser';
import theme from '../styles/theme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';
const Diacritics = require('diacritic');

const useStyles = makeStyles({
	listWrapper: {
		margin: theme.spacing(4, 0)
	},
	mainWrapper: {
		marginTop: theme.spacing(10),
		marginLeft: theme.spacing(8),
		marginRight: theme.spacing(8),
		width: '100%'
	},
	formControl: {
		margin: theme.spacing(0),
		minWidth: 120
	},
	listWrapper: {
		margin: theme.spacing(4, 0, 4, 0)
	}
});

export default function brskaj({ artists, songsNew, songsPopular, qry }) {
	function artistToUrl(string) {
		return (
			'/izvajalci/' +
			Diacritics.clean(string).replace(/[^a-z0-9]/gi, '-').toLowerCase() +
			'-pesmi-akordi-besedila-skladbe'
		);
	}
	const classes = useStyles();

	const showArtists = (
		<section className={classes.listWrapper}>
			<Typography variant="h6" gutterBottom>
				IZVAJALCI:
			</Typography>
			<Grid container>
				<List dense>
					<Grid container>
						{artists.map((artist, index) => {
							const labelId = `checkbox-list-secondary-label-${1}`;
							return (
								<Grid>
									<Link href={artistToUrl(artist.author)}>
										<ListItem key={index} button>
											<ListItemAvatar>
												<Avatar
													alt={artist.author + 'izvajalec akordov pesmi najbolj gledani'}
													src={`/static/images/avatar/${1}.jpg`}
												/>
											</ListItemAvatar>
											<ListItemText
												id={labelId}
												primary={artist.author}
												secondary={`#${index + 1}`}
											/>
											<ListItemSecondaryAction />
										</ListItem>
									</Link>
								</Grid>
							);
						})}
					</Grid>
				</List>
			</Grid>
		</section>
	);

	const showSongs = (
		<section className={classes.listWrapper}>
			<Typography variant="h6" gutterBottom>
				BESEDILA PESMI IN AKORDI:
			</Typography>
			<Songbrowser newsetsongs={songsNew} popularSongs={songsPopular} />
		</section>
	);

	return (
		<Layout>
			<Grid container>
				<Grid item xs={12}>
					<Typography gutterBottom variant="h4" component="h1">
						Rezultati iskanja za poizvedbo: <strong>{qry}</strong>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{artists.length > 0 ? showArtists : <div>Ni izvajalcev za tvojo poizvedbo</div>}
				</Grid>

				<Grid item xs={12}>
					{songsPopular.length > 0 ? showSongs : <div>Ni pesmi za tvojo poizvedbo</div>}
				</Grid>
			</Grid>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/search?query=${encodeURIComponent(context.query.query)}`
	);
	const searchquerydata = await res.json();
	const artists = searchquerydata[0];
	const songsNew = searchquerydata[1];
	const songsPopular = searchquerydata[2];
	const qry = context.query.query;

	return {
		props: { artists, songsNew, songsPopular, qry }
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
	};
}
