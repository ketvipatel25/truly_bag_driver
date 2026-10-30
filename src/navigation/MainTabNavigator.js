import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

// Screens

// Icons
import {
  ExploreIcon,
  Explore1Icon,
  StayIcon,
  InboxIcon,
  SavedIcon,
  ProfileIcon,
  StaysGreen,
  SavedGreen,
  InboxGreen,
  ProfileGreen,
  FillIcon,
  StayFill,
  FillGreenIcon,
  HomeBlueIcon,
  HomeIcon,
  BlueDeliveryIcon,
  DeliveryIcon,
  EarningIcon,
  BlueEarningIcon,
  ProductIcon,
  BlueProfileIcon,
} from "../assets";

// Utils
import { fontFamily, fontSize, hp, isIOS } from "../utils/helpers";
import HomeScreen from "../Screens/HomeScreen";
import DeliveriesScreen from "../Screens/DeliveriesScreen";
import EarningsScreen from "../Screens/EarningsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ✅ Gradient Text Component
const GradientText = ({ text }) => (
  <MaskedView
    maskElement={
      <Text
        style={{
          fontSize: fontSize(12),
          fontFamily: fontFamily.poppins400,
          textAlign: "center",
          color: "black",
          lineHeight: hp(18),
        }}
      >
        {text}
      </Text>
    }
  >
    <LinearGradient
      colors={["#5029F4", "#5029F4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1.2 }}
    >
      <Text
        style={{
          opacity: 0,
          fontSize: fontSize(12),
          fontFamily: fontFamily.poppins400,
          textAlign: "center",
          lineHeight: hp(18),
        }}
      >
        {text}
      </Text>
    </LinearGradient>
  </MaskedView>
);

/* --------------------------
   STACKS FOR EACH TAB
--------------------------- */
const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const DeliveriesStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DeliveriesScreen" component={DeliveriesScreen} />
  </Stack.Navigator>
);

const EarningsStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EarningsScreen" component={EarningsScreen} />
  </Stack.Navigator>
);

const ProfileStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  </Stack.Navigator>
);

/* --------------------------
   MAIN TAB NAVIGATOR
--------------------------- */
const MainTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const childRouteName = getFocusedRouteNameFromRoute(route) ?? "";

        // Determine if we're on the main tab screen
        const isMainScreen =
          (route.name === "HomeStack" &&
            (childRouteName === "" || childRouteName === "HomeScreen")) ||
          (route.name === "DeliveriesStack" &&
            (childRouteName === "" || childRouteName === "DeliveriesScreen")) ||
          (route.name === "EarningsStack" &&
            (childRouteName === "" || childRouteName === "EarningsScreen")) ||
          (route.name === "ProfileStack" &&
            (childRouteName === "" || childRouteName === "ProfileScreen"));

        return {
          headerShown: false,
          tabBarStyle: {
            height: isIOS ? hp(75) : hp(80),
            paddingTop: 5,
            height: 80 + insets.bottom,
            // paddingBottom: insets.bottom,
            borderTopWidth: 1,
            borderTopColor: "#E0E0E0",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          },
          tabBarIcon: ({ focused }) => {
            const iconSizeStyles = {
              HomeStack: { width: hp(20), height: hp(20) },
              DeliveriesStack: { width: hp(20), height: hp(20) },
              EarningsStack: { width: hp(20), height: hp(20) },
              ProfileStack: { width: hp(20), height: hp(20) },
            };

            let IconComponent;
            switch (route.name) {
              case "HomeStack":
                IconComponent =
                  focused && isMainScreen ? HomeBlueIcon : HomeIcon;
                break;
              case "DeliveriesStack":
                IconComponent =
                  focused && isMainScreen ? BlueDeliveryIcon : DeliveryIcon;
                break;

              case "EarningsStack":
                IconComponent = focused ? BlueEarningIcon : EarningIcon;
                break;

              case "ProfileStack":
                IconComponent =
                  focused && isMainScreen ? BlueProfileIcon : ProfileIcon;
                break;
              default:
                IconComponent = ExploreIcon;
            }

            const sizeStyle = iconSizeStyles[route.name] || {
              width: hp(20),
              height: hp(20),
            };

            return (
              <View
                style={{ width: sizeStyle.width, height: sizeStyle.height }}
              >
                <IconComponent
                  width={sizeStyle.width}
                  height={sizeStyle.height}
                />
              </View>
            );
            ``;
          },
          tabBarLabel: ({ focused }) =>
            focused && isMainScreen ? (
              <GradientText text={route.name.replace("Stack", "")} />
            ) : (
              <View>
                <Text
                  style={{
                    fontSize: fontSize(12),
                    fontFamily: fontFamily.poppins400,

                    color: "black",
                    textAlign: "center",
                    lineHeight: hp(18),
                  }}
                >
                  {route.name.replace("Stack", "")}
                </Text>
              </View>
            ),
        };
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // prevent default tab behavior
            navigation.navigate("HomeStack", { screen: "HomeScreen" }); // always go to ExploreScreen
          },
        })}
      />
      <Tab.Screen name="DeliveriesStack" component={DeliveriesStackScreen} />
      <Tab.Screen name="EarningsStack" component={EarningsStackScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
