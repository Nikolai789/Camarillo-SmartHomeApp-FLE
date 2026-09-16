import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusLabel, getStatusColor } from '../utils/deviceStatus';

export default function StatusBadge({ device }) {
  return (
    <View style={[styles.badge, { backgroundColor: getStatusColor(device) }]}>
      <Text style={styles.text}>{getStatusLabel(device)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
