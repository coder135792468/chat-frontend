import React, { useState } from "react";
import Button from "./Button";
import { StyleSheet, TextInput, View, Text } from "react-native";
import axios from "axios";

export const SendMsg = ({ messages, setMessages, scrollView }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const sendMessage = async () => {
    try {
      if (text.length === 0) return;
      setLoading(true);
      scrollView.current.scrollToEnd({ animated: true });
      const newMsgs = [...messages, { role: "user", content: text }];
      setMessages(newMsgs);
      const res = await axios.post(
        "https://chat-api-production-652b.up.railway.app/openai/chat",
        {
          messages: newMsgs,
        }
      );
      setMessages([
        ...messages,
        { role: "user", content: text },
        res.data.result.message,
      ]);
      setText("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      scrollView.current.scrollToEnd({ animated: true });
    }
  };
  return (
    <View
      style={
        loading
          ? { ...styles.textInputBox, ...styles.loadingState }
          : { ...styles.textInputBox }
      }
    >
      {loading ? (
        <Text style={styles.loadingStateText}>Loading....</Text>
      ) : (
        <View style={styles.textInputBox}>
          <TextInput
            onChangeText={(newText) => setText(newText)}
            value={text}
            style={styles.textInput}
            placeholder="Say Hi.."
          />
          <Button onPress={sendMessage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputBox: {
    width: "100%",
    flexDirection: "row",
    height: 40,
  },
  loadingState: {
    alignItems: "center",
    justifyContent: "center",
  },
  loadingStateText: {
    fontSize: 14,
    fontWeight: "900",
  },
  textInput: {
    width: "68%",
    padding: 5,
  },
  sendBtn: {
    width: "30%",
  },
});
