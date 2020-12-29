import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({});

export default function PdfRightSide({ songContent }) {
	const imageUrl = songContent.pdf_file_name.substr(0, songContent.pdf_file_name.lastIndexOf('.')) + '.jpg';
	const pdfDisplay = (
		<Grid container>
			<Grid item sm={12}>
				<Typography variant="overline" component="h3" color="textSecondary">
					{songContent.title} akordi pesmi in besedilo {songContent.author} - akordi
				</Typography>
				<Paper elevation={3}>
					<Image
						src={`${process.env.NEXT_PUBLIC_WEBSERVER}/api/pdf_images/${imageUrl}`}
						alt={`${songContent.title} besedilo akordi ${songContent.author} chords lyrics text tekst tablature tabs`}
						width={2550}
						height={3300}
					/>
				</Paper>
			</Grid>
		</Grid>
	);
	return <div>{pdfDisplay}</div>;
}
