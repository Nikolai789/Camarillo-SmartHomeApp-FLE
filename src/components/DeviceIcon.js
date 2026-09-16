import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function DeviceIcon({ device, size = 28, color = '#1E3A5F' }) {
  if (device.iconSet === 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={device.icon} size={size} color={color} />;
  }
  return <Ionicons name={device.icon} size={size} color={color} />;
}
