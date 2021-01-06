import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SchoolIcon from '@material-ui/icons/School';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import LanguageIcon from '@material-ui/icons/Language';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

export default function Categories() {
	return (
		<nav>
			<Typography gutterBottom variant="h6" color="primary">
				KATEGORIJE:
			</Typography>
			<Paper>
				<List>
					<Grid container>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/bozicne-pesmi-bozicna-glasba">
								<ListItem button>
									<ListItemIcon>
										<AcUnitIcon />
									</ListItemIcon>
									<ListItemText primary="Božične pesmi" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/hrvaske-dalmatinske-pesmi-hrvaska-dalmatinska-glasba">
								<ListItem button>
									<ListItemIcon>
										<LanguageIcon />
									</ListItemIcon>
									<ListItemText primary="Hrvaške pesmi" />
								</ListItem>
							</Link>
						</Grid>

						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/slovenske-ljudske-pesmi-ljudska-glasba">
								<ListItem button>
									<ListItemIcon>
										<RecordVoiceOverIcon />
									</ListItemIcon>
									<ListItemText primary="Ljudske pesmi" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/narodno-zabavna-domaca-glasba">
								<ListItem button>
									<ListItemIcon>
										<LibraryBooksIcon />
									</ListItemIcon>
									<ListItemText primary="Narodno zabavna" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/slovenske-otroske-pesmi-za-otroke">
								<ListItem button>
									<ListItemIcon>
										<ChildCareIcon />
									</ListItemIcon>
									<ListItemText primary="Otroške pesmi" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/popularne-najlepse-pesmi-popularna-glasba">
								<ListItem button>
									<ListItemIcon>
										<LibraryBooksIcon />
									</ListItemIcon>
									<ListItemText primary="Najbolj popularno" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/pop-rock-gasba-ex-yu-yugo">
								<ListItem button>
									<ListItemIcon>
										<AudiotrackIcon />
									</ListItemIcon>
									<ListItemText primary="Pop Rock glasba" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/slovenska-popevka-plesna-glasba">
								<ListItem button>
									<ListItemIcon>
										<LibraryBooksIcon />
									</ListItemIcon>
									<ListItemText primary="Slovenske popevke" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/slovenske-pesmi">
								<ListItem button>
									<ListItemIcon>
										<LanguageIcon />
									</ListItemIcon>
									<ListItemText primary="Slovenske zabavne" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/ostalo-angleske-disco-pesmi-instrumentalna-klasicna-glasba">
								<ListItem button>
									<ListItemIcon>
										<LibraryBooksIcon />
									</ListItemIcon>
									<ListItemText primary="Ostale pesmi" />
								</ListItem>
							</Link>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<ListItem button disabled>
								<ListItemIcon>
									<LibraryBooksIcon />
								</ListItemIcon>
								<ListItemText primary="Seznam izvajalcev" />
							</ListItem>
						</Grid>
						<Grid item xs={6} sm={4} md={3} lg={2}>
							<Link href="/kategorija/ucenje-igranje-sola-kitare">
								<ListItem button>
									<ListItemIcon>
										<SchoolIcon />
									</ListItemIcon>
									<ListItemText primary="Kitarske lekcije" />
								</ListItem>
							</Link>
						</Grid>
					</Grid>
				</List>
			</Paper>
		</nav>
	);
}
