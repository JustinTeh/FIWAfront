import { Picker } from "@react-native-picker/picker";
import { Modal, Button, Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Link, Stack } from 'expo-router'; 
import React, { PropsWithChildren, useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";


type Props = {
    selectedCategory: string;
    onClose: () => void;
    isVisible: boolean;
    setSelectedCategory: (value: string) => void;
}

export default function CategoryPicker({isVisible, selectedCategory, setSelectedCategory, onClose} : Props) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        
        <Pressable style={styles.buttonTouchable} onPress={onClose}>
          <MaterialIcons name="close" color="#fff" size={22}></MaterialIcons>
        </Pressable>

        <Picker  itemStyle={styles.textPrimary} selectedValue={selectedCategory} onValueChange={(categoryValue, categoryIndex) => setSelectedCategory(categoryValue)}>
      {/* TO DO: SWITCH FROM HARD CODED CATEGORIES TO DYNAMIC */}
        <Picker.Item label="Poultry" value="Poultry" ></Picker.Item>
        <Picker.Item label="Beef" value="Beef"></Picker.Item>
        <Picker.Item label="Pork" value="Pork"></Picker.Item>
        <Picker.Item label="Veg/Fruit" value="Veg/Fruit"></Picker.Item>
        <Picker.Item label="Snacks" value="Snacks"></Picker.Item>
      </Picker>
        

      </View>
    </Modal>
      
  


  );
};


const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: "#537FE7",
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    scrollableContainer: {
      flex: 2,
      maxHeight: "100%",
      maxWidth: "100%",
      alignItems: 'center'
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    buttonTouchable: {
      paddingTop: '1%',
      paddingLeft: '93%'
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
    },
    textBox: {
        outlineColor: "#C3B1E1",
        color: "#9C9C9C", // light gray
        width: '100%',
        padding: 10,
    },
});