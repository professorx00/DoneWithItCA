import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';
const animation = require('../animations/done.json');

function UploadScreen({ progress = 0, visible = false, onDone }) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				<LottieView
					autoPlay
					loop={false}
					source={require('../animations/done.json')}
					onAnimationFinish={() => onDone()}
				/>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
});

export default UploadScreen;
