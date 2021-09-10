import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';
import Screen from '../components/Screen';

const sbar = Constants.statusBarHeight;

function OfflineNotice(props) {
	return (
		<Screen style={styles.container}>
			<Text>No Internet Connection Detected</Text>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: 50,
		position: 'absolute',
		zIndex: 1,
		width: '100%',
		top: sbar,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default OfflineNotice;
