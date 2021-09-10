import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import { Image } from 'react-native-expo-image-cache';
import listings from '../api/listings';

function ListingsDetailsScreen({ route }) {
	const listing = route.params;
	return (
		<View>
			<Image
				uri={listing.images[0].url}
				preview={{ uri: listing.images[0].thumbnailUrl }}
				style={styles.image}
				tint='light'
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.price}>{'$' + listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/mosh.jpg')}
						title='Mosh Hamedani'
						subTitle='5 Listings'
					/>
				</View>
			</View>
		</View>
	);
}

export default ListingsDetailsScreen;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	price: {
		fontSize: 20,
		color: colors.secondary,
		fontWeight: 'bold',
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});
