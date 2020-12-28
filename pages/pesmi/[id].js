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
import Image from 'next/image';
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
function Chords({ songData }) {
	// Render post...
	const classes = useStyles();
	const imageUrl = songData.pdf_file_name.substr(0, songData.pdf_file_name.lastIndexOf('.')) + '.jpg';
	console.log(imageUrl);
	return (
		<Layout>
			<Grid container>
				<Grid item sm={6}>
					test
				</Grid>
				<Grid item sm={6}>
					<Image
						src={`${process.env.NEXT_PUBLIC_WEBSERVER}/api/pdf_images/${imageUrl}`}
						alt="oglas1"
						width={2550}
						height={3300}
					/>
				</Grid>
			</Grid>
			<Typography variant="h4" component="h1" />
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/paths/songs`);
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
	const splitLink = params.id.split('-');
	const id = splitLink[splitLink.length - 1];

	const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/content/${id}`);
	const responded = await res.json();
	const songData = responded[0];
	// Pass post data to the page via props
	return { props: { songData } };
}

export default Chords;
