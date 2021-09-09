import React from 'react';
import LottieView from 'lottie-react-native';
const loader = require('../animations/loader.json');

function ActivityIndicator({ visible = false }) {
	if (!visible) return null;
	return <LottieView autoPlay loop source={loader} />;
}

export default ActivityIndicator;
