import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const StartGame = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default StartGame;
