import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Translate = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const animatedStyles = {
    transform: [
      {
        translateY: animation,
      },
      {
        translateX: animation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 260,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => animation.setValue(0));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
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
  },
});

export default Translate;
