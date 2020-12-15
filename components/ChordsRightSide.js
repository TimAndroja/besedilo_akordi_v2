import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles({});

function youtubeToEmbed(youtubeUrl) {
	return youtubeUrl.replace('watch?v=', 'embed/');
}

export default function ChordsRightSide({ songContent }) {
	console.log();

	const classes = useStyles();
	return <div style={{ width: '600px', height: '600px' }} />;
}
