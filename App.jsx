import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WelcomeScreen from './Screens/WelcomeScreen';
import QRCodeScannerScreen from './Screens/QRCodeScannerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={styles.container}>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
