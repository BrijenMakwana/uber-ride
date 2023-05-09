import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./src/bottomTabs/HomeTab";
import FindRideScreen from "./src/screens/FindRideScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="FindRide" component={FindRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
