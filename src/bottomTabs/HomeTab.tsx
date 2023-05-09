import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ServicesTab from "./ServicesTab";
import AccountTab from "./AccountTab";
import ActivityTab from "./ActivityTab";
import {
  Foundation,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#909090",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        tabBarStyle: {
          paddingTop: 10,
          height: 65,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={26} color={color} />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name="ServicesTab"
        component={ServicesTab}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" size={26} color={color} />
          ),
          title: "Services",
        }}
      />
      <Tab.Screen
        name="ActivityTab"
        component={ActivityTab}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="equal-box" size={20} color={color} />
          ),
          title: "Activity",
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountTab}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={16} color={color} />
          ),
          title: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
