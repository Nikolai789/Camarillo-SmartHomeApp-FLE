
export function getStatusLabel(device) {
  if (device.kind === 'lock') {
    return device.isOn ? 'LOCKED' : 'UNLOCKED';
  }
  return device.isOn ? 'ON' : 'OFF';
}

export function getStatusColor(device) {
  if (device.kind === 'lock') {
    return device.isOn ? '#C62828' : '#2E7D32';
  }
  return device.isOn ? '#2E7D32' : '#9E9E9E';
}

export function getActionLabel(device) {
  if (device.kind === 'lock') {
    return device.isOn ? 'Unlock' : 'Lock';
  }
  return device.isOn ? 'Turn Off' : 'Turn On';
}
