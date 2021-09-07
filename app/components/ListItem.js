import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({
	image,
	IconComponent,
	title,
	subTitle,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.listItemContainer}>
					{IconComponent}
					{image && <Image source={image} style={styles.image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
					<MaterialCommunityIcons name='chevron-right' size={25} />
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

export default ListItem;

const styles = StyleSheet.create({
	listItemContainer: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	title: {
		fontWeight: '700',
	},
	subTitle: {
		color: colors.medium,
	},
});
