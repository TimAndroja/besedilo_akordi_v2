import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#004676'
		},
		secondary: {
			main: '#CF333F'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#f3f3f3'
		}
	},
	spacing: 10
});
theme = responsiveFontSizes(theme);
export default theme;
