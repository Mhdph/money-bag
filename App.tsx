import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./app/assets/fonts/Lato-Bold.ttf"),
    "Lato-Refular": require("./app/assets/fonts/Lato-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
