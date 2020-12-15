import Navbar from '../../components/Navbar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

import Image from 'next/image';
import Link from 'next/link';
import LinkMUI from '@material-ui/core/Link';
import next from 'next';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';
import ChordsLeftSide from '../../components/ChordsLeftSide';
import ChordsRightSide from '../../components/ChordsRightSide';

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
	}
});

export default function slovenske_pesmi({ songContent }) {
	const classes = useStyles();

	return (
		<div>
			<Navbar />
			<main className={classes.mainWrapper}>
				<Grid container spacing={2}>
					<Grid item sm={5}>
						<ChordsLeftSide songContent={songContent} />
					</Grid>

					<Grid item sm={7}>
						<ChordsRightSide songContent={songContent} />
					</Grid>
				</Grid>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.NEXT_PUBLIC_WEBSERVER + '/api/songs/content/29');
	const categoryData = await res.json();
	const songContent = categoryData[0];

	return {
		props: {
			songContent
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 5 // In seconds
	};
}
