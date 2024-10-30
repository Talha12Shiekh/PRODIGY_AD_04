import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';

export default QRCodeScannerScreen = () => {
  return (
    <View style={styles.container}>
      <RNCamera
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
