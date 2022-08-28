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

  const openColorBackgroundColor = () => {
    navigation.navigate('ColorBackgroundColor');
  };

  const openRotation = () => {
    navigation.navigate('Rotation');
  };

  const openWidthHeightPercentage = () => {
    navigation.navigate('WidthHeightPercentage');
  };

  const buttonColor1 = colors.colorPalette2.orangePink;
  const buttonColor2 = colors.colorPalette1.primaryRoyalBlue;
  const buttonColor3 = colors.colorPalette1.primaryPastelGreen;
  const buttonColor4 = colors.colorPalette1.primaryOceanBlue;
  const onPressButtonColor = colors.colorPalette2.rosePink;
  const buttonFontColor = '#E8F9FD';

  return (
    <LinearGradient
      colors={[
        colors.colorPalette3.rosyPink,
        colors.colorPalette3.sandyOrange,
        colors.colorPalette3.lightYellow,
        colors.colorPalette3.blue,
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
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
          <Button
            onPress={openTranslate}
            title='See Translate'
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
        </View>
        <View style={styles.duoContainer}>
          <Button
            onPress={openScale}
            title='See Scale'
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
          <Button
            onPress={openWidthAndHeight}
            title='See Width & Height'
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
        </View>
        <View style={styles.duoContainer}>
          <Button
            onPress={openAbsolutePosition}
            title='See Absolute Position'
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
          <Button
            onPress={openColorBackgroundColor}
            title='See Color / Background Color'
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
        </View>
        <View style={styles.duoContainer}>
          <Button
            onPress={openRotation}
            title='See Rotation'
            color={buttonColor1}
            onPressColor={onPressButtonColor}
            fontColor={buttonFontColor}
          />
          <Button
            onPress={openWidthHeightPercentage}
            title='See Width Height Percentage'
            color={buttonColor1}
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
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  duoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
