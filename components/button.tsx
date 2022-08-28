import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

interface ButtonProps {
  onPress: Function;
  title: string;
  color: string;
  onPressColor: string;
  fontColor: string;
}

export const Button = ({
  onPress,
  title,
  color,
  onPressColor,
  fontColor,
}: ButtonProps) => {
  const [pressed, isPressed] = useState(false);

  return (
    <Pressable
      onPress={() => {
        onPress();
        isPressed(true);
        setTimeout(() => {
          isPressed(false);
        }, 1000);
      }}
    >
      <View
        style={
          pressed
            ? { backgroundColor: onPressColor, ...styles.buttonContainer }
            : { backgroundColor: color, ...styles.buttonContainer }
        }
      >
        <Text
          style={{
            color: fontColor,
            ...styles.buttonText,
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 150,
    width: 150,
    padding: 10,
    margin: 5,
    marginRight: 5,
    // borderWidth: 2,
    // borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '800',
    flex: 1,
  },
});
