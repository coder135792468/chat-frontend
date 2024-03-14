import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export const Messages = ({ messages, scrollView }) => {
  return (
    <ScrollView style={styles.chatBox} ref={scrollView}>
      {messages
        .filter((message) => message?.role !== "system")
        .map((message, index) => (
          <View key={index + 1}>
            {message?.role !== "user" && (
              <View style={styles.msg}>
                <Text style={styles.msgText}>{message.content}</Text>
              </View>
            )}
            {message?.role === "user" && (
              <View style={{ ...styles.msg, ...styles.msg1 }}>
                <Text style={styles.msgText}>{message.content}</Text>
              </View>
            )}
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  chatBox: {
    backgroundColor: "#efefef",
    flex: 1,
    width: "100%",
  },
  msg: {
    backgroundColor: "#333",
    margin: 10,
    width: "80%",
    padding: 10,
    borderRadius: 4,
  },
  msgText: {
    color: "#fff",
  },

  msg1: {
    marginLeft: "10%",
    backgroundColor: "#4488ff",
  },
});
