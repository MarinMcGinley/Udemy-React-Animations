import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from 'react-native';

const ColorBackgroundColor = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(251, 99, 71)', 'rgb(99, 71, 255)'],
  });

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation,
  };

  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99, 71, 255)', 'rgb(251, 99, 71)'],
  });

  const fontAnimatedStyle = {
    color: colorInterpolation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
      // }).start(() => {
      //   console.log('finished');
      // });
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text style={[fontAnimatedStyle, styles.text]}>
            Hello Animation
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
  },
});

export default ColorBackgroundColor;
