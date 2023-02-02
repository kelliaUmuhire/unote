import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { global_styles } from "../styles/global";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([
    {
      id: 1,
      title: "The road home",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eros. Duis at fringilla turpis",
    },
    {
      id: 2,
      title: "Imagine Dragons",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eros. Duis at fringilla turpis",
    },
    {
      id: 3,
      title: "Twenty One Pilots",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum eros. Duis at fringilla turpis",
    },
  ]);

  const saveData = (newData) => {
    setData(data.concat(newData));
  };
  return (
    <View style={global_styles.defaultCntr}>
      <View style={styles.cont_nav}>
        <Text style={global_styles.title}>Notes</Text>
        <TouchableOpacity>
          <Text
            style={[
              global_styles.dimw,
              { fontSize: 18, paddingTop: 5 },
              global_styles.arvo_r,
            ]}
          >
            Folders
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.notes}>
        {data.length > 0 &&
          data.map((note, i) => (
            <TouchableOpacity
              key={note.id}
              style={[styles.note, { marginLeft: i % 2 !== 0 ? 20 : 5 }]}
              onPress={() =>
                navigation.navigate("Note", { new: false, data: { ...note } })
              }
            >
              {/* <Image /> */}
              <Text style={[global_styles.n_title, global_styles.arvo_r]}>
                {note.title}
              </Text>
              <Text
                style={[
                  global_styles.dimw,
                  global_styles.rubik,
                  { paddingTop: 5 },
                ]}
              >
                {note.content}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate("Note", { new: true, saveData })}
      >
        <AntDesign
          name="pluscircle"
          size={50}
          color="#6F6FC7"
          //   style={{ marginHorizontal: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont_nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notes: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 25,
  },
  note: {
    backgroundColor: "#272636",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    // marginHorizontal: 12,
    marginTop: 20,
  },
  add: {
    position: "absolute",
    right: 20,
    bottom: 40,
  },
});
