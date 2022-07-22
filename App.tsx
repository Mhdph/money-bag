import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RootStack from "./app/navigation/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./app/assets/fonts/Lato-Bold.ttf"),
    "Lato-Refular": require("./app/assets/fonts/Lato-Regular.ttf"),
  });

  return <RootStack />;
}
