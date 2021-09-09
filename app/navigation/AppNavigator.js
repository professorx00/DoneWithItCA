import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import colors from '../config/colors';
import NewListingButton from './NewListingButton';
import routes from './route';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name='home' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT}
				component={ListingEditScreen}
				options={({ navigation }) => {
					return {
						title: 'Add Listing',
						tabBarButton: () => (
							<NewListingButton
								onPress={() => {
									navigation.navigate(routes.LISTING_EDIT);
								}}
							/>
						),
					};
				}}
			/>
			<Tab.Screen
				name={routes.ACCOUNT_NAVIGATOR}
				component={AccountNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name='account' size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
