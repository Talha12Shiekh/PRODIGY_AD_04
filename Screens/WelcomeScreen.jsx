import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  BG_COLOR,
} from '../Constants';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Welcome-img.jpg')}
        resizeMode="contain"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: BG_COLOR,
    gap: wp(10),
  },
  image: {
    width: wp(80),
  },
  btnTextStyle: {
    fontSize: wp(6),
  },
});
