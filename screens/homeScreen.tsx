import React from "react";
import { Button, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  const openOpacity = () => {
    navigation.navigate("Opacity");
  };

  return (
    <View style={styles.container}>
      <Button onPress={openOpacity} title="See Opacity" color="tomato" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
