import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';

export const Button = (props: {
  onPress: Function;
  title: string;
  color: string;
  fontColor: string;
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.onPress;
      }}
    >
      <View style={{ backgroundColor: props.color, ...styles.buttonContainer }}>
        <Text
          style={{
            color: props.fontColor,
            ...styles.buttonText,
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 140,
    width: 140,
    margin: 5,
    marginBottom: 5,
    marginRight: 5,
    borderWidth: 2,
    borderColor: 'black',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    flex: 1,
  },
});
