import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput {...otherProps} style={styles.textInput} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		padding: 15,
		marginVertical: 10,
		width: width,
	},
	textInput: defaultStyles.text,
	icon: {
		marginRight: 10,
	},
});

export default AppTextInput;
