import React from 'react';
import colors from '../config/colors';
import Icon from './Icon';

function ImageButton(props) {
	return (
		<View>
			<Icon
				name='camera'
				backgroundColor={colors.light}
				iconColor={colors.medium}
				size={70}
			/>
		</View>
	);
}

export default ImageButton;
