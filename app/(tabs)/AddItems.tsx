import { Button, Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router'; 
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CameraView } from 'expo-camera';
import CameraPage from '../Components/CameraPage';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
export default function AddItems() {

    const [active, setActive] = useState<CameraView | boolean >(true);
    const activeString = active.toString();
    
    function closeCamera() {
        setActive(false);
        console.log("onClose!")
    }
    
    function openCamera() {
        setActive(true);
        console.log("Camera opened!")
    }
    
    return (
        <View style={styles.container}>
            {
                active ? (
                  // TODO: have a smaller camera scale so it doesn't waste bandwidth
                  // https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design
                  <View style={styles.camContainer}> 
                      <CameraPage onCloseCamera={closeCamera}></CameraPage> 
                  </View>
                ) :
                <View>
                    {/* TO DO: pausePreview on Camera if different tab is selected */}
                    <Text style={styles.textPrimary}>Blank render because active is: {activeString}</Text>
                    <Pressable onPress={openCamera}>
                        <MaterialCommunityIcons name="barcode-scan" size={38} color={styles.primaryAccent.color} ></MaterialCommunityIcons>
                        <Text style={styles.textPrimary}>Scan Barcode</Text>
                    </Pressable>
                </View>
            }

            {/* Scrollable List of Scanned Items */}
            <View style={styles.scrollableContainer}>
              <Text style={styles.textPrimary}>Insert list of items here</Text>


            </View>

        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    backgroundColor: '#F7F8FA',
  },
  camContainer: {
    flex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    alignItems: 'stretch',
  },
  scrollableContainer: {
    flex: 2,
    maxHeight: "100%",
    maxWidth: "100%",
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
  primaryAccent : {
    color: "#537FE7", // muted blue
  },
  secondaryAccent : {
    color: "#C3B1E1", // lavender
  },
  backgrounds: {
        color: "#F7F8FA", // light grayish white
  },
  textPrimary: {
    color: "#3C3C3C" // dark gray
  },
  textSecondary: {
    color: "#6F6F6F" // med gray
  },
  textPlaceholder: {
    color: "#9C9C9C" // light gray
  }
});