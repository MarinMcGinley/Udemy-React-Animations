import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, useWindowDimensions, Text } from 'react-native';
import { Button } from '../components/button';
import colors from '../utils/colors';

const HomeScreen = ({ navigation }: any) => {
  const { width, height } = useWindowDimensions();

  const openOpacity = () => {
    navigation.navigate('Opacity');
  };

  const openTranslate = () => {
    navigation.navigate('Translate');
  };

  const openScale = () => {
    navigation.navigate('Scale');
  };

  const openWidthAndHeight = () => {
    navigation.navigate('WidthAndHeight');
  };

  const openAbsolutePosition = () => {
    navigation.navigate('AbsolutePosition');
  };

  const buttonColor = colors.colorPalette2.orangePink;
  const onPressButtonColor = colors.colorPalette2.rosePink;
  const buttonFontColor = '#E8F9FD';

  return (
    <LinearGradient
      colors={[
        // colors.colorPalette3.yellow,
        colors.colorPalette3.rosyPink,
        colors.colorPalette3.sandyOrange,
        colors.colorPalette3.lightYellow,
      ]}
      style={styles.container}
    >
      <View
        style={{
          width: width * 0.9,
          height: height * 0.8,
          ...styles.buttonsContainer,
        }}
      >
        <View style={styles.duoContainer}>
          <Button
            onPress={openOpacity}
            title='See Opacity'
            color={buttonColor}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
          <Button
            onPress={openTranslate}
            title='See Translate'
            color={buttonColor}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
        </View>
        <View style={styles.duoContainer}>
          <Button
            onPress={openScale}
            title='See Scale'
            color={buttonColor}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
          <Button
            onPress={openWidthAndHeight}
            title='See Width & Height'
            color={buttonColor}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
        </View>
        <View style={styles.duoContainer}>
          <Button
            onPress={openAbsolutePosition}
            title='See Absolute Position'
            color={buttonColor}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: 'pink',
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonsContainer: {
    // borderWidth: 2,
    // borderColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  duoContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'purple',
    justifyContent: 'center',
  },
});

export default HomeScreen;
