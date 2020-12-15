import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import Pagination from '@material-ui/lab/Pagination';
import theme from '../styles/theme';
import VisibilityIcon from '@material-ui/icons/Visibility';
const useStyles = makeStyles({
	orderList: {
		paddingRight: theme.spacing(4),
		flexGrow: 1,
		paddingBottom: theme.spacing(2)
	},
	listViews: {
		textAlign: 'start'
	}
});
export default function Songbrowser(props) {
	const classes = useStyles();
	function paginationArrays(songs, pagesize) {
		let pagesArray = [];
		for (let i = 0; i < songs.length; i++) {
			if (i % pagesize == 0) {
				pagesArray.push([]);
			}
			pagesArray[Math.floor(i / pagesize)].push(songs[i]);
		}
		return pagesArray;
	}
	console.log(props.popularSongs);
	const newSongs = paginationArrays(props.newsetsongs, 10);
	const mostViewedSongs = paginationArrays(props.popularSongs, 10);
	const songDisplayArray = [ newSongs, mostViewedSongs ];
	const PagesNum = newSongs.length;
	const [ value, setValue ] = React.useState(1);
	const [ page, setPage ] = React.useState(1);
	const handlePage = (event, value) => {
		setPage(value);
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
		setPage(1);
	};

	return (
		<Paper className={classes.orderList}>
			<Tabs value={value} onChange={handleChange} indicatorColor="primary" textcolor="primary">
				<Tab disabled label="UREDI:" />
				<Tab label="NOVO" />
				<Tab label="OGLEDI" />
			</Tabs>

			<List>
				{songDisplayArray[0].lenghth ? (
					songDisplayArray[value - 1][page - 1].map((song, i) => (
						<ListItem key={i} button>
							<Grid container>
								<Grid item xs={6} style={{ display: 'flex' }}>
									<ListItemAvatar>
										<Avatar
											alt={` ${song.author} - zbirka akordov`}
											src={`${process.env
												.NEXT_PUBLIC_WEBSERVER}/api/images/${song.youtube_image_name}`}
										/>
									</ListItemAvatar>
									<ListItemText id={song.id_song} primary={song.title} />
								</Grid>
								<Grid xs={5}>
									<ListItemText
										id={song.id_song}
										secondary={song.author}
										className={classes.listViews}
									/>
								</Grid>
								<Grid container xs={1}>
									<Grid xs={3}>
										<ListItemText
											id={song.id_song}
											secondary={<VisibilityIcon fontSize="small" />}
											className={classes.listViews}
										/>
									</Grid>
									<Grid xs={9}>
										<ListItemText
											id={song.id_song}
											secondary={song.views}
											className={classes.listViews}
										/>
									</Grid>
								</Grid>
							</Grid>
						</ListItem>
					))
				) : (
					'Prišlo je do napake'
				)}
			</List>
			<Grid container justify="center">
				<Pagination count={PagesNum} color="primary" page={page} onChange={handlePage} />
			</Grid>
		</Paper>
	);
}