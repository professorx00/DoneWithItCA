import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
	{
		id: 1,
		title: 'Red Jacket for sale',
		price: 100,
		image: require('../assets/jacket.jpg'),
	},
	{
		id: 2,
		title: 'Couch in great condition',
		price: 1000,
		image: require('../assets/couch.jpg'),
	},
];

function ListingScreen(props) {
	return (
		<AppScreen style={styles.container}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => {
					return (
						<Card
							title={item.title}
							subTitle={'$' + item.price}
							image={item.image}
						/>
					);
				}}
			/>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: colors.light,
	},
});
export default ListingScreen;
