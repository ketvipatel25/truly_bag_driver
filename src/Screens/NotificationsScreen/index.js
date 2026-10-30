import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, wp, hp } from "../../utils/helpers";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../assets";
const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ height: hp(57), justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: wp(18),
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", left: 0 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontSize(18),
              color: colors.black,
              fontFamily: fontFamily.poppins500,
            }}
          >
            All Notifications
          </Text>
        </View>
      </View>
      <View
        style={{
          // marginHorizontal: wp(17),
          width: "100%",
          backgroundColor: "#EBEBEB",
          height: hp(1),
        }}
      />
    </SafeAreaView>
  );
};
export default NotificationScreen;
