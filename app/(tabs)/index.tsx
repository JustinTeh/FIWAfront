import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router'; 
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Index() {

  return (
      <View style={styles.container}>
        <Stack.Screen>
          
        </Stack.Screen>
        <Text style={styles.text}>Home screen</Text>
              
        {/* <Link href="/inventory" style={styles.button}>
          Go to Inventory screen
        </Link> */}
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
