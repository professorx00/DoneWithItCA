import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './route';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.ACCOUNT_SCREEN}
				options={{
					title: 'My Account',
				}}
				component={AccountScreen}
			/>
			<Stack.Screen name={routes.MESSAGE_SCREEN} component={MessagesScreen} />
		</Stack.Navigator>
	);
};

export default AccountNavigator;
