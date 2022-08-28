import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Rotation = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [
      {
        rotate: rotateInterpolate,
        // rotateX: rotateInterpolate,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: false,
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
        <Animated.View style={[styles.box, animatedStyles]}>
          <Animated.Text>Hello Rotate</Animated.Text>
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
});

export default Rotation;
