import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DevicesScreen from './screen/DevicesScreen';
import DeviceDetailsScreen from './screen/DeviceDetailsScreen';

export type DeviceType = 'light' | 'fan' | 'ac' | 'lock';

export type RootStackParamList = {
  Home: undefined;
  Devices: undefined;
  DeviceDetails: { device: DeviceType };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Smart Home' }}  />
      <Stack.Screen name="Devices" component={DevicesScreen} options={{ title: 'My Devices' }} />
      <Stack.Screen
        name="DeviceDetails"
        component={DeviceDetailsScreen}
        options={{ title: 'Device Details' }}
      />
    </Stack.Navigator>
  );
}
