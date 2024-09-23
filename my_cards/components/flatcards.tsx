import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

export default function Flatcards() {
  return (
    <View style={styles.mainview}>
      <Text style={styles.headingtext}>Flatcards</Text>
      <SafeAreaView style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Blue</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  headingtext: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    padding: 5,
    color: "rgb(229, 229, 229)",
  },
  container: {
    flex: 1,
    flexDirection: "row",

    backgroundColor: "rgb(31, 31, 31)",
  },
  card: {
    fontSize: 15,
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  card1: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  card2: {
    backgroundColor: "rgb(0, 255, 0)",
  },
  card3: {
    backgroundColor: "rgb(0, 0, 255)",
  },
});
