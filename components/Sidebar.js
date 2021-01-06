import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Star from '@material-ui/icons/Star';
import ListSubheader from '@material-ui/core/ListSubheader';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
import theme from '../styles/theme';

const drawerWidth = 250;
const useStyles = makeStyles({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerContainer: {
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '0.5em'
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.3)'
		}
	},
	sidebarWrapper: {
		display: 'none',
		[theme.breakpoints.up('lg')]: {
			display: 'flex'
		}
	}
});

export default function Sidebar() {
	const classes = useStyles();
	const [ historyArray, setHistoryArray ] = useState([]);

	useEffect(
		() => {
			function updateHistory() {
				if (localStorage['history'] == null) {
					console.log('no history');

					localStorage.setItem('history', JSON.stringify(historyArray));
				} else {
					const history = localStorage.getItem('history');
					let historyArray = JSON.parse(history);
					setHistoryArray(historyArray);
				}
			}
			updateHistory();
		},
		[ setHistoryArray ]
	);

	return (
		<aside className={classes.sidebarWrapper}>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<Link href="/">
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary="Domača stran" />
							</ListItem>
						</Link>
						<ListSubheader disableSticky>Promovirano: </ListSubheader>
						<ListItem button disabled>
							<ListItemIcon>
								<Star />
							</ListItemIcon>
							<ListItemText primary={'promocija'} />
						</ListItem>
						<ListItem button disabled>
							<ListItemIcon>
								<Star />
							</ListItemIcon>
							<ListItemText primary={'promocija'} />
						</ListItem>
					</List>
					<Divider />
					<ListSubheader disableSticky>Ogledano: </ListSubheader>
					<List dense>
						{historyArray.map((song, i) => {
							return (
								<Link href={`/pesmi/${song[1]}`} key={i}>
									<ListItem button>
										<ListItemIcon>
											<QueueMusicIcon />
										</ListItemIcon>
										<ListItemText
											primary={song[0]}
											style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
										/>
									</ListItem>
								</Link>
							);
						})}
					</List>
					<Divider />
				</div>
			</Drawer>
		</aside>
	);
}
