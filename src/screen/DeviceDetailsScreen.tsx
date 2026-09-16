import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { RootStackParamList } from '../Navigator';
import React, { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceDetails'>;

const deviceDetails = {
  light: {
    name: 'Living Room Light',
    icon: 'lightbulb' as const,
    status: 'ON',
    action: 'Turn Off',
    color: '#2988b4',
  },
  fan: {
    name: 'Ceiling Fan',
    icon: 'fan' as const,
    status: 'OFF',
    action: 'Turn On',
    color: '#2988b4',
  },
  ac: {
    name: 'Air Conditioner',
    icon: 'snowflake' as const,
    status: 'ON',
    action: 'Turn Off',
    color: '#2988b4',
  },
  lock: {
    name: 'Front Door Lock',
    icon: 'lock' as const,
    status: 'LOCKED',
    action: 'Unlock',
    color: '#2988b4',
  },
};

export default function DeviceDetailsScreen({ route }: Props) {
  const device = deviceDetails[route.params.device];

  const [isOn, setIsOn] = useState(device.status === 'ON');
  const status = route.params.device === 'lock'
    ? (isOn ? 'LOCKED' : 'UNLOCKED')
    : (isOn ? 'ON' : 'OFF');
  const action = isOn ? 'Turn Off' : 'Turn On';


  return (
    <View style={styles.container}>
      <View style={styles.card}>
          <MaterialCommunityIcons name={device.icon} size={76} color={device.color} />


        <Text style={styles.deviceName}>{device.name}</Text>

        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Status:</Text>
          <View style={styles.statusBadge}>
          <Text style={[styles.statusText, { color: isOn ? '#1ac258' : '#b62020' }]}>
            {status}
          </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.actions}>
          <Pressable
            style={[styles.primaryButton, { backgroundColor: isOn ? '#b62020' : '#1ac258' }]}
            onPress={() => setIsOn((current) => !current)}
          >
            <MaterialCommunityIcons name="power" size={25} color="white" />
            <Text style={styles.primaryButtonText}>{action}</Text>
          </Pressable>

          <Pressable style={styles.settingsButton}>
            <MaterialCommunityIcons name="cog-outline" size={25} color="black" />
            <Text style={styles.settingsButtonText}>Settings</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6fa',
    padding: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },

  deviceName: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
  },
  statusLabel: {
    color: '#000000',
    fontSize: 14,
  },
  statusBadge: {
    backgroundColor: '#e5e5e5',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '700',
  },
  divider: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: '#e8edf3',
    marginTop: 17,
    marginBottom: 14,
  },
  actions: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    gap: 10,
  },
  primaryButton: {
    flex: 1,
    minHeight: 60,
    borderRadius: 10,
    backgroundColor: '#20b66b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  settingsButton: {
    flex: 1,
    minHeight: 60,
    borderRadius: 10,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButtonText: {
    color: '#53647d',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});
