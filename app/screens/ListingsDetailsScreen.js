import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingsDetailsScreen(props) {
	return (
		<View>
			<Image source={require('../assets/jacket.jpg')} style={styles.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
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
