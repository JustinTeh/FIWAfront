import { Text, View, StyleSheet, Pressable } from 'react-native';
import { CameraView } from 'expo-camera';
import { useState } from 'react';
import {Link} from 'expo-router';
import CameraPage from '../Components/CameraPage';
export default function Inventory() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  buttonTouchable: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
});
