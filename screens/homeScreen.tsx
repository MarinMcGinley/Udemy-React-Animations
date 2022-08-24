import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Button } from '../components/button';

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

  return (
    <View style={styles.container}>
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
            color='tomato'
            fontColor='white'
          />
          <Button
            onPress={openTranslate}
            title='See Translate'
            color='purple'
            fontColor='white'
          />
        </View>
        <View style={styles.duoContainer}>
          <Button
            onPress={openScale}
            title='See Scale'
            color='lightblue'
            fontColor='white'
          />
          <Button
            onPress={openWidthAndHeight}
            title='See Width & Height'
            color='green'
            fontColor='white'
          />
        </View>
        <Button
          onPress={openAbsolutePosition}
          title='See Absolute Position'
          color='red'
          fontColor='white'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'pink',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // padding: 5,
  },
  duoContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'purple',
  },
});

export default HomeScreen;
