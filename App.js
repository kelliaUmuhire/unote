import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/HomeScreen";
import NoteScreen from "./src/pages/NoteScreen";
import {
  useFonts,
  Arvo_400Regular,
  Arvo_700Bold,
  Rubik_400Regular,
} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";

let coptions = {
  headerTintColor: "#FCFBFE",
  headerTitleStyle: {
    fontFamily: "Arvo_700Bold",
  },
  headerStyle: {
    backgroundColor: "#1F1D2B",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    shadowColor: "#FCFBFE",
  },
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Arvo_700Bold,
    Arvo_400Regular,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Unote",
              ...coptions,
            }}
          />
          <Stack.Screen
            name="Note"
            component={NoteScreen}
            options={{
              title: "Note",
              ...coptions,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
