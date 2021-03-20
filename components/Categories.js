import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SchoolIcon from "@material-ui/icons/School";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import LanguageIcon from "@material-ui/icons/Language";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
import theme from "../styles/theme";
import { Typography } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
export default function Categories() {
  return (
    <nav>
      <Box mb={1}>
        <Typography variant="overline">Kategorije:</Typography>
        <Divider></Divider>
      </Box>
      <Paper elevation={3}>
        <List>
          <Grid container>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/bozicne-pesmi-bozicna-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <AcUnitIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">Božične pesmi</Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/hrvaske-dalmatinske-pesmi-hrvaska-dalmatinska-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <LanguageIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">Hrvaške pesm</Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>

            <Grid item xs={6} md={4}>
              <Link href="/kategorija/slovenske-ljudske-pesmi-ljudska-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <RecordVoiceOverIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">Ljudske pesmi</Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/narodno-zabavna-domaca-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <LibraryBooksIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Narodno zabavna
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/slovenske-otroske-pesmi-za-otroke">
                <ListItem button dense>
                  <ListItemIcon>
                    <ChildCareIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">Otroške pesmi</Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid xs={6} md={4}>
              <Link href="/kategorija/pop-rock-gasba-ex-yu-yugo">
                <ListItem button dense>
                  <ListItemIcon>
                    <AudiotrackIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Pop Rock glasba
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/slovenska-popevka-plesna-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <LibraryBooksIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Slovenske popevke
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/slovenske-pesmi">
                <ListItem button dense>
                  <ListItemIcon>
                    <LanguageIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Slovenske zabavne
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/ostalo-angleske-disco-pesmi-instrumentalna-klasicna-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <LibraryBooksIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">Ostale pesmi</Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/kategorija/ucenje-igranje-sola-kitare">
                <ListItem button dense>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Kitarske lekcije
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="/popularne-najlepse-pesmi-popularna-glasba">
                <ListItem button dense>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">
                        Najbolj gledano
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} md={4}>
              <Link href="">
                <ListItem button dense disabled>
                  <ListItemIcon>
                    <PeopleAltIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle2">Izvajalci</Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Grid>
          </Grid>
        </List>
      </Paper>
    </nav>
  );
}
