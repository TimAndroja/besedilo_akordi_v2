import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
		flexGrow: 1,
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
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch'
			}
		}
	}
}));

export default function Navbar() {
	const router = useRouter();
	const classes = useStyles();
	const [ searchInput, setSearchInput ] = React.useState('');

	function handleKeyDown(event) {
		if (event.keyCode === 13) {
			router.push(`/brskaj?query=${searchInput}`);
		}
	}

	return (
		<nav className={classes.grow}>
			<AppBar position="fixed" className={classes.AppBar}>
				<Toolbar>
					<Link href="/">
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="open drawer"
						>
							<MusicNoteIcon />
						</IconButton>
					</Link>
					<Link href="/">
						<Typography className={classes.title} variant="h6" noWrap>
							Besedilo-akordi.si
						</Typography>
					</Link>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Brskaj..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</div>
					<IconButton
						disabled
						edge="start"
						className={classes.menuButton}
						color="inherit"
						style={{ marginLeft: '5px' }}
					>
						<Brightness4Icon />
					</IconButton>
				</Toolbar>
				<div className={classes.grow} />
			</AppBar>
		</nav>
	);
}
