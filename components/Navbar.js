import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const useStyles = makeStyles((theme) => ({
	AppBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(0)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	button: {
		margin: theme.spacing(1)
	},

	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	}
}));

export default function Navbar() {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);

	return (
		<nav className={classes.grow}>
			<AppBar position="fixed" className={classes.AppBar}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
						<MusicNoteIcon />
					</IconButton>
					<div>
						<Typography variant="h5" component="h3" noWrap>
							Besedilo-akordi.si
						</Typography>
					</div>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton color="inherit" aria-label="upload picture" component="span">
							<Brightness4Icon />
						</IconButton>
					</div>
					<div className={classes.sectionMobile} />
				</Toolbar>
			</AppBar>
		</nav>
	);
}
