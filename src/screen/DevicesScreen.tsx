import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Pressable, Switch, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { RootStackParamList } from '../Navigator';
import React, { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Devices'>;

export default function DevicesScreen({ navigation }: Props) {
  const [isLightOn, setIsLightOn] = useState(true);
  const [isFanOn, setIsFanOn] = useState(false);
  const [isACOn, setIsACOn] = useState(true);
  const [isLockOn, setIsLockOn] = useState(true);
  
  return (
    <ScrollView style={styles.container}>

      <View style={styles.deviceCard}>
        <Pressable style={styles.deviceInfo} onPress={() => navigation.navigate('DeviceDetails', { device: 'light' })}>
          <MaterialCommunityIcons name="lightbulb" size={40} color="#2988b4" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.deviceText}>Living Room Light</Text>
            <Text style={styles.deviceStatus}>Status: {isLightOn ? 'On' : 'Off'}</Text>
          </View>
        </Pressable>
        <Switch value={isLightOn} onValueChange={setIsLightOn} />
      </View>

      <View style={styles.deviceCard}>
        <Pressable style={styles.deviceInfo} onPress={() => navigation.navigate('DeviceDetails', { device: 'fan' })}>
          <MaterialCommunityIcons name="fan" size={40} color="#2988b4" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.deviceText}>Ceiling Fan</Text>
            <Text style={styles.deviceStatus}>Status: {isFanOn ? 'On' : 'Off'}</Text>
          </View>
        </Pressable>
        <Switch value={isFanOn} onValueChange={setIsFanOn} />
      </View>

      <View style={styles.deviceCard}>
        <Pressable style={styles.deviceInfo} onPress={() => navigation.navigate('DeviceDetails', { device: 'ac' })}>
          <MaterialCommunityIcons name="snowflake" size={40} color="#2988b4" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.deviceText}>Air Conditioner</Text>
            <Text style={styles.deviceStatus}>Status: {isACOn ? 'On' : 'Off'}</Text>
          </View>
        </Pressable>
        <Switch value={isACOn} onValueChange={setIsACOn} />
      </View>

      <View style={styles.deviceCard}>
        <Pressable style={styles.deviceInfo} onPress={() => navigation.navigate('DeviceDetails', { device: 'lock' })}>
          <MaterialCommunityIcons name="lock" size={40} color="#2988b4" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.deviceText}>Front Door Lock</Text>
            <Text style={styles.deviceStatus}>Status: {isLockOn ? 'Locked' : 'Unlocked'}</Text>
          </View>
        </Pressable>
        <Switch value={isLockOn} onValueChange={setIsLockOn} />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  deviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderRadius: 15,
    backgroundColor: '#eeeeee',
    marginBottom: 12,
  },

  deviceInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceText: {
    fontSize: 17,
    fontWeight: 'bold',
  },

    deviceStatus: {
    fontSize: 14,
    marginTop: 4,
  },
});
