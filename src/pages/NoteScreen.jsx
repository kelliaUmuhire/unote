import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  BackHandler,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { global_styles } from "../styles/global";

export default function NoteScreen({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(null);

  const saveNote = () => {
    route.params.saveData({
      id: Math.floor(100 + Math.random() * 900),
      title,
      content,
    });
    BackHandler.goBack();
  };

  useEffect(() => {
    if (!route.params.new) {
      let { data } = route.params;
      setTitle(data.title);
      setContent(data.content);
      setId(data.id);
    }

    const backAction = () => {
      Alert.alert("Save", "Save?", [
        {
          text: "YES",
          onPress: () => BackHandler.goBack(),
          style: "cancel",
        },
        { text: "NO", onPress: () => saveNote() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={global_styles.defaultCntr}>
      <View style={styles.tools}>
        <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={() => {}}>
          <AntDesign name="picture" size={25} color="#4A4856" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={() => {}}>
          <AntDesign name="sharealt" size={25} color="#4A4856" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 8 }} onPress={() => {}}>
          <AntDesign name="folder1" size={25} color="#4A4856" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 8 }} onPress={() => {}}>
          <AntDesign name="delete" size={25} color="#4A4856" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40 }}>
        <TextInput
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
          style={[styles.input, { fontSize: 25 }, global_styles.rubik]}
        />
        <TextInput
          multiline={true}
          numberOfLines={15}
          onChangeText={setContent}
          value={content}
          placeholder="Type something..."
          style={[styles.input, { fontSize: 18 }, global_styles.rubik]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tools: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
  },
  input: {
    marginTop: 20,
    color: "#FFFFFF",
    outlineStyle: "none",
  },
});
