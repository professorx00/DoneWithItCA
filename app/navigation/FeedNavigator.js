import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingsDetailsScreen from '../screens/ListingsDetailsScreen';
import routes from './route';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.LISTINGS}
				component={ListingsScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={routes.LISTING_DETAILS}
				component={ListingsDetailsScreen}
				options={{ title: 'Details' }}
			/>
		</Stack.Navigator>
	);
};

export default FeedNavigator;
