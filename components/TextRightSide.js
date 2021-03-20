import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import theme from "../styles/theme";
const useStyles = makeStyles({
  textContent: {
    fontSize: "1.6vw",
    position: "relative",
    fontFamily: "Roboto Mono, monospace",
    whiteSpace: "pre",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    [theme.breakpoints.up("xs")]: {
      fontSize: "14px",
      position: "relative",
      fontFamily: "Roboto Mono, monospace",
      whiteSpace: "pre",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
});

export default function TextsRightSide({ songContent }) {
  const classes = useStyles();
  const text_lines = songContent.text_content.split(/\r?\n/);

  const pdfDisplay = (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="overline" component="h3" color="textSecondary">
          {songContent.title} akordi pesmi in besedilo {songContent.author} -
          akordi
        </Typography>
        <Paper elevation={2}>
          <Box m={2}>
            <div className={classes.textContent}>
              {text_lines.map((text_line, index) =>
                index % 2 === 0 ? (
                  <p
                    key={index}
                    style={{
                      color: theme.palette.primary.main,
                      lineHeight: "1",
                      fontWeight: "700",
                    }}
                  >
                    {text_line}
                  </p>
                ) : (
                  <p key={index} style={{ lineHeight: "1" }}>
                    {text_line}
                  </p>
                )
              )}
            </div>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
  return <div>{pdfDisplay}</div>;
}
