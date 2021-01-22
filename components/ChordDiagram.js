import React, { useState, useEffect } from 'react';
import Chord from '@tombatossals/react-chords/lib/Chord';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import GuitarChordsData from '../chordDiagramDatabase/guitar/index';
import UkuleleChordsData from '../chordDiagramDatabase/ukulele/index';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({});
export default function ChordDiagram(props) {
	const theme = useTheme();
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const [ open1, setOpen1 ] = React.useState(false);
	const instrumentArray = [ GuitarChordsData, UkuleleChordsData ];
	const [ selectedChord, setSelectedChord ] = React.useState('C');
	const [ selectedSuffix, setSelectedSuffix ] = React.useState('major');
	const [ instrumentOption, setInstrumentOption ] = React.useState(0);
	const [ chordsArray, setChordsArray ] = React.useState(getChordsArray('C', 'major'));

	//stepper
	const [ activeStep, setActiveStep ] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const MyChord = () => {
		const chord = chordsArray[activeStep];

		const instrument = {
			strings: instrumentArray[instrumentOption].main.strings,
			fretsOnChord: instrumentArray[instrumentOption].main.fretsOnChord,
			name: instrumentArray[instrumentOption].main.name,
			keys: [],
			tunings: {
				standard: instrumentArray[instrumentOption].tunings.standard
			}
		};

		const lite = false; // defaults to false if omitted
		return <Chord chord={chord} instrument={instrument} lite={lite} />;
	};

	function getChordsArray(key, suffix) {
		let chordsArray = [];

		let fixedKey;
		switch (key) {
			case 'C#':
				instrumentOption == 0 ? (fixedKey = 'Csharp') : (fixedKey = 'Db');
				break;
			case 'F#':
				instrumentOption == 0 ? (fixedKey = 'Fsharp') : (fixedKey = 'Gb');
				break;
			default:
				fixedKey = key;
		}

		instrumentArray[instrumentOption].chords[fixedKey].forEach(function(chordVariations) {
			if (chordVariations.suffix == suffix) {
				chordVariations.positions.forEach((chord) => {
					let frets = [];
					let fingers = [];
					let capo = chord.capo ? true : false;
					for (let i = 0; i < chord.frets.length; i++) {
						fingers.push(parseInt(chord.fingers.charAt(i)));
						chord.frets.charAt(i) == 'x' ? frets.push(-1) : frets.push(parseInt(chord.frets.charAt(i), 16));
					}
					let baseFret = frets.filter((e) => e > 0);
					const baseFretMax = Math.max(...baseFret);
					baseFret = Math.min(...baseFret);

					const baseShift = baseFret <= 0 ? 0 : baseFret - 1;
					let barres = chord.barres !== undefined ? [ chord.barres ] : null;
					if (baseFretMax > 4) {
						frets = frets.map((element) => (element > 0 ? element - baseShift : element));
						if (barres != null) barres = [ chord.barres - baseShift ];
					} else {
						baseFret = 0;
					}

					let chordForArray = {
						frets: frets,
						fingers: fingers,
						capo: capo
					};

					if (barres > 0) chordForArray.barres = barres;
					if (baseFret > 0) chordForArray.baseFret = baseFret;
					chordsArray.push(chordForArray);
				});
			}
		});

		return chordsArray;
	}

	useEffect(
		() => {
			setChordsArray(getChordsArray(selectedChord, selectedSuffix));
		},
		[ selectedChord, selectedSuffix, instrumentOption, activeStep ]
	);

	return (
		<div>
			<Paper elevation={4}>
				<Box>
					<Tabs
						style={{ backgroundColor: theme.palette.background.default }}
						variant="fullWidth"
						value={instrumentOption}
						indicatorColor="primary"
						textColor="primary"
						onChange={(e, value) => {
							setInstrumentOption(value);
							setActiveStep(0);
							setSelectedChord('C');
							setSelectedSuffix('major');
						}}
					>
						<Tab label="KITARA" />
						<Tab label="UKULELE" />
					</Tabs>
				</Box>
				<Box marginX={6} marginY={2}>
					<Box paddingTop={2}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<FormControl className={classes.formControl} fullWidth>
									<InputLabel id="demo-controlled-open-select-label">Ključ:</InputLabel>
									<Select
										labelId="demo-controlled-open-select-label"
										id="demo-controlled-open-select"
										open={open}
										onClose={() => setOpen(false)}
										onOpen={() => setOpen(true)}
										value={selectedChord}
										onChange={(e) => {
											setActiveStep(0);
											setSelectedChord(e.target.value);
										}}
									>
										{instrumentArray[0].keys.map((chord, i) => (
											<MenuItem value={chord} index={i}>
												{chord}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<FormControl className={classes.formControl} fullWidth>
									<InputLabel id="demo-controlled-open-select-label">Lestvica:</InputLabel>
									<Select
										labelId="demo-controlled-open-select-label"
										id="demo-controlled-open-select"
										open={open1}
										onClose={() => setOpen1(false)}
										onOpen={() => setOpen1(true)}
										value={selectedSuffix}
										onChange={(e) => {
											setActiveStep(0);
											setSelectedSuffix(e.target.value);
										}}
									>
										<MenuItem value={'major'} key={0}>
											Dur
										</MenuItem>
										<MenuItem value={'minor'} key={1}>
											Mol
										</MenuItem>
										<MenuItem value={'7'} key={2}>
											Dur7
										</MenuItem>
										<MenuItem value={'m7'} key={3}>
											Mol7
										</MenuItem>
										<MenuItem value={'maj7'} key={4}>
											Maj7
										</MenuItem>
										<MenuItem value={'dim7'} key={5}>
											dim7
										</MenuItem>
										<MenuItem value={'sus2'} key={6}>
											sus2
										</MenuItem>
										<MenuItem value={'sus4'} key={7}>
											sus4
										</MenuItem>
										<MenuItem value={'7sus4'} key={8}>
											7sus4
										</MenuItem>
										<MenuItem value={'aug'} key={9}>
											Aug
										</MenuItem>
										<MenuItem value={'6'} key={10}>
											Dur6
										</MenuItem>
										<MenuItem value={'69'} key={11}>
											Dur6/9
										</MenuItem>
										<MenuItem value={'m6'} key={12}>
											Mol6
										</MenuItem>
										<MenuItem value={'add9'} key={13}>
											Dur + 9
										</MenuItem>
										<MenuItem value={'madd9'} key={14}>
											Mol + 9
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</Box>
					<Box width="60%" margin="auto" paddingY={2}>
						<MyChord />
					</Box>
				</Box>
				<Box>
					<MobileStepper
						variant="dots"
						steps={chordsArray.length}
						position="static"
						activeStep={activeStep}
						nextButton={
							<Button size="small" onClick={handleNext} disabled={activeStep === chordsArray.length - 1}>
								Next
								{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
							</Button>
						}
						backButton={
							<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
								{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
								Back
							</Button>
						}
					/>
				</Box>
			</Paper>
		</div>
	);
}
