import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import Screen from './app/components/Screen';

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
		background: 'white',
	},
};

export default function App() {
	return (
		<>
			<NavigationContainer theme={MyTheme}>
				<OfflineNotice sytle={{ zIndex: 1 }} />
				<AppNavigator />
			</NavigationContainer>
		</>
	);
}
