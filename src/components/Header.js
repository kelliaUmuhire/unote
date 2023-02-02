import React from "react";
import { View, Button } from "react-native";
// import { styles } from "../styles/global";

export default function Header({ navigation }) {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Notes" onPress={() => navigation.navigate("Note")} />
      <Button title="New Note" onPress={() => navigation.navigate("NewNote")} />
    </View>
  );
}
