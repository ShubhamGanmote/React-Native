import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../styles/Colors';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home Screen'
					component={HomeScreen}
					options={{
						title: 'Polling',
						headerStyle: {
							backgroundColor:
								Platform.OS === 'android' ? Colors.primaryColor : '',
						},
						headerTintColor:
							Platform.OS === 'android' ? 'white' : Colors.primaryColor,
						headerTitleStyle: {
							fontWeight: 'bold',
							letterSpacing: 2,
						},
					}}
				/>
				<Stack.Screen
					name='Details Screen'
					component={DetailsScreen}
					options={{
						title: 'Polling',
						headerStyle: {
							backgroundColor:
								Platform.OS === 'android' ? Colors.primaryColor : '',
						},
						headerTintColor:
							Platform.OS === 'android' ? 'white' : Colors.primaryColor,
						headerTitleStyle: {
							fontWeight: 'bold',
							letterSpacing: 2,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
