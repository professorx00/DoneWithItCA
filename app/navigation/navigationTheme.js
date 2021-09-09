import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';

export default MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'rgb(255, 45, 85)',
	},
};
