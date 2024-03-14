import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Header } from "./components/Header";
import { useState, useRef } from "react";
import { Messages } from "./components/Messages";
import { SendMsg } from "./components/SendMsg";

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Your a expert mentor and give advice in 40 words",
    },
  ]);
  const scrollViewRef = useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#777" />
      <Header setMessages={setMessages} />
      <Messages messages={messages} scrollView={scrollViewRef} />
      <SendMsg
        messages={messages}
        setMessages={setMessages}
        scrollView={scrollViewRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textInputBox: {
    width: "100%",
    flexDirection: "row",
  },
  textInput: {
    width: "68%",
    padding: 5,
  },
  sendBtn: {
    width: "30%",
  },
});
