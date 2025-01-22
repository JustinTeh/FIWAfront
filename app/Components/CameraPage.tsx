import { CameraView, CameraType, useCameraPermissions, BarcodeSettings, CameraViewRef } from 'expo-camera';
import { Link, Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, Pressable, BaseBackgroundPropType } from 'react-native';

type Props = {
    onCloseCamera: () => void;
}
export default function CameraPage({onCloseCamera} : Props) {
    const [facing, setFacing] = useState<CameraType>('back');
    //const [active, setActive] = useState<CameraView | boolean >(true);
    const [permission, requestPermission] = useCameraPermissions();
    const router = useRouter();

    // function handleDismiss() {
    //     router.push('/');
    // }

    function toggleCameraFacing() {
        if (facing === null) // nullcheck for sanity
          setFacing('back');
        else {
          facing === 'back' ? setFacing('front') : setFacing('back');
        }
    }   


    if (!permission) {
        // Camera Permissions are still loading
        return <View></View>
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
        <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
        );
    } 
    
    const scannableBarcodes: BarcodeSettings = {
      barcodeTypes: ['aztec', 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93','itf14', 'codabar', 'code128', 'upc_a'],
    }
      
    return (
        <>
            <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTouchable} onPress={onCloseCamera}>
                        <Text style={styles.text}>Close Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>     
            


        </>

    )
    
}


const styles = StyleSheet.create({
    container: {
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
      margin: 20,
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
      //paddingBottom: 10,
    },
    camera: {
      height: "50%",
    }
})