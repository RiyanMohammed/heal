const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StudentLogin from "./screens/StudentLogin";
import FinalTimer from "./screens/FinalTimer";
import Map1 from "./screens/Map1";
import Conformation from "./screens/Conformation";
import StaffPage2 from "./screens/StaffPage2";
import StaffPage1 from "./screens/StaffPage1";
import StaffPage from "./screens/StaffPage";
import StaffLogin from "./screens/StaffLogin";
import Main from "./screens/Main";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "BlackHanSans-Regular": require("./assets/fonts/BlackHanSans-Regular.ttf"),
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
    "Lalezar-Regular": require("./assets/fonts/Lalezar-Regular.ttf"),
    "Kadwa-Regular": require("./assets/fonts/Kadwa-Regular.ttf"),
    "Kadwa-Bold": require("./assets/fonts/Kadwa-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="StudentLogin"
              component={StudentLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FinalTimer"
              component={FinalTimer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Conformation"
              component={Conformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StaffPage2"
              component={StaffPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StaffPage1"
              component={StaffPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StaffPage"
              component={StaffPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StaffLogin"
              component={StaffLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
