import { Text , View , StyleSheet } from "react-native";
import React from "react";

export default QRCodeScannerScreen = () => {
    return <View style={styles.container}>
        <Text>QRCodeScannerScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})

