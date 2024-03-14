import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

export const Header = ({ setMessages }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Assistant</Text>
      <View style={styles.btn}>
        <Button
          title="Reset"
          onPress={() =>
            setMessages([
              {
                role: "system",
                content: "Your a expert mentor and give advice in 40 words",
              },
            ])
          }
        />
      </View>
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
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 20,
    position: "relative",
    top: 10,
  },
  btn: {
    width: 110,
    height: 50,
    marginRight: 10,
  },
});
