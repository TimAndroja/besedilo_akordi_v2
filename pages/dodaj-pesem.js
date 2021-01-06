import Layout from '../components/Layout';
import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Songbrowser from '../components/Songbrowser';
import theme from '../styles/theme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
	input: {
		display: 'none'
	}
});

export default function AddChords() {
	const classes = useStyles();
	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ youtube, setYoutube ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ pdfFileName, setPdfFileName ] = useState('Naloži pdf datoteko');
	const [ pdfFileBin, setPdfFileBin ] = useState('Naloži pdf datoteko');
	const [ checkbox, setCheckbox ] = useState({
		slovenska: false,
		narodna: false,
		dalmatinska: false,
		otroska: false,
		tuja: false,
		popevka: false,
		ljudska: false,
		bozicna: false,
		rock: false,
		lekcija: false
	});

	const handleCheckboxChange = (event) => {
		setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
	};
	const handlePdfUpload = (e) => {
		setPdfFileName(e.target.value.replace(/\\/g, '/').split('/').pop());
		setPdfFileBin(e.target.files[0]);
		console.log(pdfFileBin);
	};

	const submitSong = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('title', title);
		formData.append('author', author);
		formData.append('youtube', youtube);
		formData.append('pdf_file', pdfFileBin);
		formData.append('description', description);
		formData.append('slovenska', checkbox.slovenska);
		formData.append('dalmatinska', checkbox.dalmatinska);
		formData.append('tuja', checkbox.tuja);
		formData.append('narodna', checkbox.narodna);
		formData.append('otroska', checkbox.otroska);
		formData.append('bozicna', checkbox.bozicna);
		formData.append('popevka', checkbox.popevka);
		formData.append('ljudska', checkbox.ljudska);
		formData.append('rock', checkbox.rock);
		formData.append('lekcija', checkbox.lekcija);
		const contenttype = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		};
		fetch(`${process.env.NEXT_PUBLIC_WEBSERVER}/api/songs/submitsong`, {
			body: formData,
			headers: contenttype,
			method: 'POST'
		}).then((res) => console.log(res));
	};
	return (
		<Layout>
			<Grid container>
				<Grid item xs={6}>
					<Grid item xs={12}>
						<Typography component="h1" variant="h5">
							POZOR: Obrazec je še v izdelovanju in ne deluje
						</Typography>
					</Grid>
					<form noValidate autoComplete="off">
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									id="standard-basic"
									label="Naslov pesmi"
									fullWidth
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="standard-basic"
									label="Izvajalec"
									fullWidth
									value={author}
									onChange={(e) => setAuthor(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="standard-basic"
									label="Youtube link do pesmi"
									fullWidth
									value={youtube}
									onChange={(e) => setYoutube(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="standard-basic"
									label="Nekaj o pesmi ali izvajalcu, najbolj znana fraza/besedilo"
									fullWidth
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} style={{ marginTop: theme.spacing(3) }}>
								<FormLabel component="legend">Izberi kategorije v katere se pesem uvršča:</FormLabel>
								<Grid container>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.slovenska}
													onChange={handleCheckboxChange}
													name="slovenska"
													color="primary"
												/>
											}
											label="Slovenske pesmi"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.narodna}
													onChange={handleCheckboxChange}
													name="narodna"
													color="primary"
												/>
											}
											label="Narodno zabavna glasba"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.dalmatinska}
													onChange={handleCheckboxChange}
													name="dalmatinska"
													color="primary"
												/>
											}
											label="Hrvaške dalmatinske pesmi"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.otroska}
													onChange={handleCheckboxChange}
													name="otroska"
													color="primary"
												/>
											}
											label="Otroške pesmi"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.tuja}
													onChange={handleCheckboxChange}
													name="tuja"
													color="primary"
												/>
											}
											label="tuja glasba/drugo"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.popevka}
													onChange={handleCheckboxChange}
													name="popevka"
													color="primary"
												/>
											}
											label="Slovenska popevka"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.lekcija}
													onChange={handleCheckboxChange}
													name="lekcija"
													color="primary"
												/>
											}
											label="Kitarske lekcije"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.ljudska}
													onChange={handleCheckboxChange}
													name="ljudska"
													color="primary"
												/>
											}
											label="Ljudske pesmi"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.bozicna}
													onChange={handleCheckboxChange}
													name="bozicna"
													color="primary"
												/>
											}
											label="Božične pesmi"
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Checkbox
													checked={checkbox.rock}
													onChange={handleCheckboxChange}
													name="rock"
													color="primary"
												/>
											}
											label="Rock Pop glasba"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} style={{ marginTop: theme.spacing(0) }}>
								<input
									accept="application/pdf"
									className={classes.input}
									id="raised-button-file"
									type="file"
									onChange={handlePdfUpload}
								/>
								<label htmlFor="raised-button-file">
									<Button
										component="span"
										variant="contained"
										color="primary"
										startIcon={<CloudUploadIcon />}
									>
										{pdfFileName}
									</Button>
								</label>
							</Grid>

							<Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
								<Button
									fullWidth
									variant="contained"
									color="secondary"
									className={classes.button}
									endIcon={<SendIcon />}
									onClick={submitSong}
									size="large"
								>
									Oddaj obrazec
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Layout>
	);
}
