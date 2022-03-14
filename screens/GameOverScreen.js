import React from "react";
import { Button, Image, View, Text, StyleSheet } from "react-native";

import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText style={styles.titleText}>The Game is over!</BodyText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
        {/* <Image
          fadeDuration={1000}
          style={styles.image}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/5a1f230a6957da4aa04a790c/1570638782634-CYJ241LPF853JL6ZLPD6/John_baldwin_Tier.jpg?format=1000w",
          }}
        /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
});

export default GameOverScreen;
