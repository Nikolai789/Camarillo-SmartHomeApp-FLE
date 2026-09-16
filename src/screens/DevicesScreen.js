import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';

import DeviceIcon from '../components/DeviceIcon';
import StatusBadge from '../components/StatusBadge';
import { DEVICES } from '../data/devices';

export default function DevicesScreen({ navigation }) {
  const [devices, setDevices] = useState(DEVICES);

  const toggleDevice = (id) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isOn: !d.isOn } : d))
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('DeviceDetails', { device: item })}
    >
      <View style={styles.iconWrap}>
        <DeviceIcon device={item} size={24} color="#1E3A5F" />
      </View>

      <View style={styles.rowInfo}>
        <Text style={styles.rowName}>{item.name}</Text>
        <StatusBadge device={item} />
      </View>

      {item.kind === 'lock' ? (
        <View style={styles.lockIndicator}>
          <DeviceIcon
            device={{ ...item, icon: item.isOn ? 'lock-closed' : 'lock-open' }}
            size={18}
            color={item.isOn ? '#C62828' : '#2E7D32'}
          />
        </View>
      ) : (
        <Switch
          value={item.isOn}
          onValueChange={() => toggleDevice(item.id)}
          trackColor={{ false: '#D1D5DB', true: '#93C5FD' }}
          thumbColor={item.isOn ? '#2F6FED' : '#F4F4F5'}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EDF1F7',
  },
  listContent: {
    padding: 20,
  },
  separator: {
    height: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E3E8EF',
    padding: 14,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  rowInfo: {
    flex: 1,
  },
  rowName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1F36',
    marginBottom: 6,
  },
  lockIndicator: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
