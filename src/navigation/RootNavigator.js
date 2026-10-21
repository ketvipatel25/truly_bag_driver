import React, { Profiler } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartingScreen from "../Screens/startingScreen";
import HomeScreen from "../Screens/HomeScreen";
import DeliveriesScreen from "../Screens/DeliveriesScreen";
import EarningsScreen from "../Screens/EarningsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen
        name="StartingScreen"
        component={StartingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeliveriesScreen"
        component={DeliveriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EarningsScreen"
        component={EarningsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
