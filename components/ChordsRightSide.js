import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import React from 'react';

const useStyles = makeStyles({});

function youtubeToEmbed(youtubeUrl) {
	return youtubeUrl.replace('watch?v=', 'embed/');
}

export default function ChordsRightSide({ songContent }) {}
