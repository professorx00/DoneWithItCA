import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import colors from '../config/colors';
import routes from './route';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator initialRouteName={routes.WELCOME}>
			<Stack.Screen name={routes.LOGIN} component={LoginScreen} />
			<Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
			<Stack.Screen
				name={routes.WELCOME}
				component={WelcomeScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;
