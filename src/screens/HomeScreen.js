import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DeviceIcon from '../components/DeviceIcon';
import StatusBadge from '../components/StatusBadge';
import { DEVICES } from '../data/devices';

const STUDENT_NAME = 'Niko';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Smart Home Dashboard</Text>
          <Text style={styles.subtitle}>Welcome, {STUDENT_NAME}!</Text>
        </View>

        <View style={styles.cardGrid}>
          {DEVICES.map((device) => (
            <View key={device.id} style={styles.cardWrapper}>
              <View style={styles.card}>
                <DeviceIcon device={device} size={30} color="#1E3A5F" />
                <Text style={styles.cardLabel}>{device.shortLabel}</Text>
                <StatusBadge device={device} />
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.viewButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Devices')}
        >
          <Ionicons name="list" size={18} color="#FFFFFF" style={styles.viewButtonIcon} />
          <Text style={styles.viewButtonText}>VIEW DEVICES</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#c8cacc',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1E3A5F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1F36',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#a6d1ed',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E3E8EF',
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1F36',
    marginTop: 10,
    marginBottom: 8,
  },
  viewButton: {
    marginTop: 8,
    backgroundColor: '#2F6FED',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonIcon: {
    marginRight: 8,
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
