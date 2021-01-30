import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
	palette: {
		primary: {
			//main: '#004676'
			main: '#c44536'
		},
		secondary: {
			//main: '#CF333F'

			main: '#f5ebe6'
		},
		error: {
			main: red.A400
		},
		background: {
			//default: '#f3f3f3'
			default: '#fcfcfc '
		}
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 650,
			md: 1000,
			lg: 1500,
			xl: 1920
		}
	},
	typography: {
		h1: { fontSize: '66px', lineHeight: 1.04 },
		h6: { fontWeight: '500' },
		overline: { color: '#c44536', fontWeight: 600 }
	},

	spacing: 10
});
theme = responsiveFontSizes(theme);
export default theme;
