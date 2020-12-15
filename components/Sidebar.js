import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SchoolIcon from '@material-ui/icons/School';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Star from '@material-ui/icons/Star';
import ListSubheader from '@material-ui/core/ListSubheader';
import LanguageIcon from '@material-ui/icons/Language';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
import theme from '../styles/theme';
const drawerWidth = 270;
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
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	}
});

export default function Sidebar() {
	const classes = useStyles();
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
						{[ 'promocija1', 'promocija2' ].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									<Star />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<ListSubheader disableSticky>Ogledano: </ListSubheader>
					<List>
						{[ 'zgodovina1', 'zgodovina1', 'zgodovina3' ].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									<QueueMusicIcon />
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
				</div>
			</Drawer>
		</aside>
	);
}
