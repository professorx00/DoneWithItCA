import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';

import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import clientAPI from '../api/listings';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useAPI from '../hooks/useAPI';
import routes from '../navigation/route';

function ListingScreen({ navigation }) {
	const {
		data: listings,
		error,
		loading,
		request: loadListings,
	} = useAPI(clientAPI.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<AppScreen style={styles.container}>
			{console.log(error)}
			{error && (
				<>
					<AppText>Couldn't retrieve the listings</AppText>
					<AppButton title='Retry' onPress={loadListings} />
				</>
			)}
			<ActivityIndicator visible={loading} />
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => {
					return (
						<Card
							title={item.title}
							subTitle={'$' + item.price}
							imageUrl={item.images[0].url}
							onPress={() => {
								navigation.navigate(routes.LISTING_DETAILS, item);
							}}
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
