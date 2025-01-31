import { Button, Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Modal, TextInput } from 'react-native-paper';
import { Link, Stack } from 'expo-router'; 
import React, { useState } from 'react';
import { CameraView } from 'expo-camera';
import CameraPage from '../Components/CameraPage';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useForm, SubmitHandler, Controller, set } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryPicker from './CategoryPicker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ManualAdd() {
    const inputSchema = z.object({
        itemName: z.string()
            .min(1, {message: "Item name must be at least 1 character"})
            .max(100, {message:"Item name can't be more than 100 characters"}),
        category: z.string()
            .min(5, {message: "Category name must be at least 1 character"})
            .max(100, {message:"Item name can't be more than 100 characters"}),
        dateAdded: z.date(),
        expDate: z.date()
    });

    // infer a type for the Input Form
    type InputFormType = z.infer<typeof inputSchema>;

    // link the form with Zod
    const { control, handleSubmit, formState: {errors}} = useForm<InputFormType>({resolver: zodResolver(inputSchema)});

    const onSubmit: SubmitHandler<InputFormType> = (data: InputFormType) => { console.log(data)};

    const [itemName, onChangeText] = React.useState('Item Name');
    // const [dateAdded, onChangeText] = React.useState('Date Added');
    // const [expDate, onChangeText] = React.useState('Expiration Date');
    // const [category, onChangeText] = React.useState('Category');
    // const [quantity, onChangeText] = React.useState('quantity');

    const[selectedCategory, setSelectedCategory] = useState("");

    // Status of the Picker
    const [open, setOpen] = useState(false);
    function onModalOpen() {
      setOpen(true);
    }
    function onModalClose() {
      setOpen(false);
    }

    const openStatus = open.toString();

    return (
        <GestureHandlerRootView style={styles.container}>
            {/* Item Name */}
            <Controller
                control = {control}
                render = {(
                    {
                        field: {onChange, onBlur, value},
                        fieldState: {error}
                    }) => (
                        <View style={styles.textBox}>
                            <TextInput style={styles.textPrimary} mode="outlined" label="Item Name" onBlur={onBlur} onChangeText={onChange} value={value} activeOutlineColor={error ? "red" : styles.textPrimary.color }></TextInput>
                        </View>
                    )}
                name="itemName">
            </Controller>
            {errors.itemName && (<Text style={styles.textSecondary}>{errors.itemName.message}</Text>)}

            {/* Category */}
            <Controller
                control = {control}
                render = {(
                    {
                        field: {onBlur, value},
                        fieldState: {error}
                    }) => (
                        <View style={styles.textBox}>
                            <TextInput mode="outlined" label="Category" onBlur={onBlur} value={selectedCategory} onPress={onModalOpen} activeOutlineColor={error ? "red" : styles.textPrimary.color}></TextInput> 
                            <Text>setopen {openStatus}</Text>
                            {/* // TODO Add Category Picker */}
                            {
                              open ? 
                              (<CategoryPicker isVisible={open} selectedCategory={value} setSelectedCategory={setSelectedCategory} onClose={onModalClose}></CategoryPicker>)
                              :
                              (<View></View>)
                            }
                        </View>
                        
                        
                            


                    )} 
                name="category">
            </Controller>
            {errors.category && (<Text style={styles.textPrimary}>{errors.category.message}</Text>)}

            {/* Date Added */}
            <Controller
                control = {control}
                render = {(
                    {
                        field: {onChange, onBlur, value},
                        fieldState: {error},
                    }) => (
                        <View style={styles.container}>
                            {/* <TextInput mode="outlined" label="Category" onBlur={onBlur} onChangeText={onChange} value={value} activeOutlineColor={error ? "red" : "black"}></TextInput>  */}
                        </View>
                    )}
                    name='dateAdded'>
            </Controller>
            {/* {errors.dateAdded && (<Text style={styles.textPrimary}>{errors.dateAdded.message}</Text>)} */}



        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      backgroundColor: '#F7F8FA',
      //backgroundColor: 'gray',
      width: '98%'
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
      alignItems: 'center'
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
    },
    textBox: {
        outlineColor: "#C3B1E1",
        color: "#9C9C9C", // light gray
        width: '100%',
        padding: 10,
    },
});


{/* <Picker itemStyle={styles.textPrimary} selectedValue={selectedCategory} onValueChange={(categoryValue, categoryIndex) => setSelectedCategory(categoryValue)}>
{/* TO DO: SWITCH FROM HARD CODED CATEGORIES TO DYNAMIC */}
{/* <Picker.Item label="Poultry" value="poultry" ></Picker.Item>
<Picker.Item label="Beef" value="beef"></Picker.Item>
<Picker.Item label="Pork" value="pork"></Picker.Item>
<Picker.Item label="Veg/Fruit" value="veg/fruit"></Picker.Item>
<Picker.Item label="Snacks" value="snacks"></Picker.Item> */}

// </Picker> */}