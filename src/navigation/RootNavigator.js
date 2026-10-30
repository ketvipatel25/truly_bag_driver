import React, { Profiler } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartingScreen from "../Screens/startingScreen";
import HomeScreen from "../Screens/HomeScreen";
import DeliveriesScreen from "../Screens/DeliveriesScreen";
import EarningsScreen from "../Screens/EarningsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MainTabNavigator from "./MainTabNavigator";
import MyProfileScreen from "../Screens/MyProfileScreen";
import UpdateProfileDetails from "../Screens/UpdateProfileDetails";
import BankDetailsScreen from "../Screens/Bank DetailsScreen";
import VehicalDetailsScreen from "../Screens/VehicleDetailsScreen";
import DocumentsScreen from "../Screens/DocumentsScreen";
import NotificationScreen from "../Screens/NotificationsScreen";
import DeliveryHistoryScreen from "../Screens/DeliveryHistoryScreen";
import BankDetailsEditScreen from "../Screens/BankDetailsEditScreen";
import OrderDetailsScreen from "../Screens/OrderDetailsScreen";
import ConfirmDeliveryScreen from "../Screens/ConfirmDeliveryScreen";
import DeliveredDetailsScreen from "../Screens/DeliveredDetailsScreen";
import ReturnDetailsScreen from "../Screens/ReturnDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartingScreen"
        component={StartingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateProfileDetails"
        component={UpdateProfileDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankDetailsScreen"
        component={BankDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VehicalDetailsScreen"
        component={VehicalDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Documents"
        component={DocumentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeliveryHistoryScreen"
        component={DeliveryHistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankDetailsEditScreen"
        component={BankDetailsEditScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmDeliveryScreen"
        component={ConfirmDeliveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeliveredDetailsScreen"
        component={DeliveredDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReturnDetailsScreen"
        component={ReturnDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
