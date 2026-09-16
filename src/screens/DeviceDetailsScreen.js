import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DeviceIcon from '../components/DeviceIcon';
import { getStatusLabel, getStatusColor, getActionLabel } from '../utils/deviceStatus';

export default function DeviceDetailsScreen({ route, navigation }) {
  const { device } = route.params;
  const [isOn, setIsOn] = useState(device.isOn);
  const currentDevice = { ...device, isOn };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <DeviceIcon device={currentDevice} size={54} color="#1E3A5F" />
        </View>

        <Text style={styles.name}>{currentDevice.name}</Text>

        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Status: </Text>
          <View style={[styles.statusPill, { backgroundColor: getStatusColor(currentDevice) }]}>
            <Text style={styles.statusPillText}>{getStatusLabel(currentDevice)}</Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: isOn ? '#C62828' : '#2E7D32' },
            ]}
            activeOpacity={0.85}
            onPress={() => setIsOn((prev) => !prev)}
          >
            <Ionicons name="power" size={16} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.actionButtonText}>{getActionLabel(currentDevice)}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsButton} activeOpacity={0.85}>
            <Ionicons name="settings-outline" size={16} color="#1A1F36" style={styles.buttonIcon} />
            <Text style={styles.settingsButtonText}>Settings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backLink} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={16} color="#2F6FED" style={styles.buttonIcon} />
          <Text style={styles.backLinkText}>Back to Devices</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EDF1F7',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E8EF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1F36',
    marginBottom: 10,
    textAlign: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  statusLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusPillText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 12,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  settingsButtonText: {
    color: '#1A1F36',
    fontWeight: '700',
    fontSize: 14,
  },
  buttonIcon: {
    marginRight: 6,
  },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  backLinkText: {
    color: '#2F6FED',
    fontWeight: '600',
    fontSize: 13,
  },
});
