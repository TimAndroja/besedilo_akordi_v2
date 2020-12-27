import Layout from '../components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Songbrowser from '../components/Songbrowser';
import FeaturedArtistList from '../components/FeaturedArtistList';
import theme from '../styles/theme';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
			<Typography gutterBottom variant="h4" component="h1">
				Rezultati iskanja za poizvedbo: <strong>{qry}</strong>
			</Typography>
			{artists.length > 0 ? showArtists : <div>Ni izvajalcev za tvojo poizvedbo</div>}
			{songsPopular.length > 0 ? showSongs : <div>Ni pesmi za tvojo poizvedbo</div>}
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/search?query=${context.query.query}`);
	const searchquerydata = await res.json();
	const artists = searchquerydata[0];
	const songsNew = searchquerydata[1];
	const songsPopular = searchquerydata[2];
	const qry = context.query.query;
	console.log(searchquerydata);
	return {
		props: { artists, songsNew, songsPopular, qry }
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
	};
}
