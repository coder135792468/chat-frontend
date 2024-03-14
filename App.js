import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, ScrollView } from "react-native";
import { Header } from "./components/Header";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#777" />
      <Header />
      <ScrollView style={styles.chatBox}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((ele) => (
          <View key={ele}>
            <View style={styles.msg}>
              <Text style={styles.msgText}>Hello! How are you?</Text>
            </View>
            <View style={{ ...styles.msg, ...styles.msg1 }}>
              <Text style={styles.msgText}>I am good how are you?</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.textInputBox}>
        <TextInput style={styles.textInput} placeholder="Say Hi.." />
        <Button onPress={() => {}} />
      </View>
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
  chatBox: {
    backgroundColor: "#efefef",
    flex: 1,
    width: "100%",
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
