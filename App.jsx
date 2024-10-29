import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WelcomeScreen from './Screens/WelcomeScreen';
import {BG_COLOR, center} from './Constants';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <WelcomeScreen />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    ...center,
    flexDirection: 'column',
    backgroundColor: BG_COLOR,
  },
});
