import React from "react";
import { Button, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  const openOpacity = () => {
    navigation.navigate("Opacity");
  };

  const openTranslate = () => {
    navigation.navigate("Translate");
  };

  const openScale = () => {
    navigation.navigate("Scale");
  };

  const openWidthAndHeight = () => {
    navigation.navigate("WidthAndHeight");
  };

  const openAbsolutePosition = () => {
    navigation.navigate("AbsolutePosition");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={openOpacity} title="See Opacity" color="tomato" />
        <Button onPress={openTranslate} title="See Translate" color="purple" />
        <Button onPress={openScale} title="See Scale" color="lightblue" />
        <Button
          onPress={openWidthAndHeight}
          title="See Width & Height"
          color="green"
        />
        <Button
          onPress={openAbsolutePosition}
          title="See Absolute Position"
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "pink",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "blue",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default HomeScreen;
