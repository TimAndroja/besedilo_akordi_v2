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
const Diacritics = require('diacritic');
const useStyles = makeStyles({});

export default function FeaturedArtistsList({ mostViewedArtists, mostSongsArtists }) {
	function artistToUrl(string) {
		return (
			'/izvajalci/' +
			Diacritics.clean(string).replace(/[^a-z0-9]/gi, '-').toLowerCase() +
			'-pesmi-akordi-besedila-skladbe'
		);
	}

	const classes = useStyles();
	return (
		<Grid container spacing={10}>
			<Grid item sm={6}>
				<Typography variant="h6">Izvajalci z največjo zbirko akordov:</Typography>
				<Divider />

				<List dense>
					<Grid container>
						{mostSongsArtists.map((artist, index) => {
							const labelId = `checkbox-list-secondary-label-${1}`;
							return (
								<Grid item sm={6}>
									<Link href={artistToUrl(artist.author)}>
										<ListItem key={index} button>
											<ListItemAvatar>
												<Avatar
													alt={artist.author + 'izvajalec akordov pesmi največja zbirka'}
													src={`/`}
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

			<Grid item sm={6}>
				<Typography variant="h6">Popularni izvajalci:</Typography>
				<Divider />
				<List dense>
					<Grid container>
						{mostViewedArtists.map((artist, index) => {
							const labelId = `checkbox-list-secondary-label-${1}`;
							return (
								<Grid item sm={6}>
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
		</Grid>
	);
}
