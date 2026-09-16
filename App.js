import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DevicesScreen from './src/screens/DevicesScreen';
import DeviceDetailsScreen from './src/screens/DeviceDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#1E3A5F' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: '600' },
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Devices"
            component={DevicesScreen}
            options={{ title: 'My Devices' }}
          />
          <Stack.Screen
            name="DeviceDetails"
            component={DeviceDetailsScreen}
            options={{ title: 'Device Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
