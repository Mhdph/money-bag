import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FunctionComponent } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import Home from "../screens/HomeScreen";
import { colors } from "../config/color";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "../assets/avi/avatar.png";
import Balance from "../screens/BalanceScreen";
import { CardProps } from "../types";
import { Ionicons } from "@expo/vector-icons";

export type RootStackProps = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackProps>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imageContainerStyle={{ backgroundColor: colors.tertiary }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Mahdi"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({ route }) => ({
            headerTitle: route?.name,
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
