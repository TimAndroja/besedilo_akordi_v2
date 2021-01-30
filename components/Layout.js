import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import theme from '../styles/theme';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
	root1: {
		display: 'flex'
	},
	mainContentWrapper: {
		paddingTop: theme.spacing(10),
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(5),
		margin: 0,
		minHeight: 0,
		minWidth: 0,

		[theme.breakpoints.up('lg')]: {
			paddingTop: theme.spacing(10),
			paddingLeft: theme.spacing(9),
			paddingRight: theme.spacing(9),
			minHeight: 0,
			minWidth: 0,
			width: '100%'
		}
	}
});

export default function Layout(props) {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root1}>
				<Navbar />
				<Sidebar />
				<main className={classes.mainContentWrapper}>
					<div>{props.children}</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}
