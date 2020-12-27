import Layout from '../../components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Songbrowser from '../../components/Songbrowser';

import theme from '../../styles/theme';
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
function Artist({ songsNew, songsPopular, authorName }) {
	// Render post...
	const classes = useStyles();

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
			<Typography variant="h4" component="h1">
				{authorName}
			</Typography>
			{showSongs}
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/paths/artists`);
	const paths = await res.json();

	return {
		paths,
		fallback: 'blocking'
	};
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1

	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/artist/${params.id}`);
	const songs = await res.json();
	const songsNew = songs[0];
	const songsPopular = songs[1];
	const authorName = songs[2];
	console.log(authorName);

	console.log(songs);
	// Pass post data to the page via props
	return { props: { songsNew, songsPopular, authorName } };
}

export default Artist;
