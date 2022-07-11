import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from "react-native";

const Scale = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const animatedStyles = {
    transform: [
      {
        scale: animation,
      },
      //   {
      //     scaleX: animation,
      //   },
      //   {
      //     scaleY: animation,
      //   },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>This side forward</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});

export default Scale;
