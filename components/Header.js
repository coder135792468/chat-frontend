import React from "react";
import { StyleSheet, View, Text } from "react-native";
export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Assistant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#444",
    width: "100%",
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
