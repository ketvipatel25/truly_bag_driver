import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { AddAccountButton, BackIcon } from "../../assets";
import GradientButton from "../../components/GradientButton";
import { colors } from "../../utils/colors";
const VehicalDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          width: "100%",
          height: hp(57),
          // backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: wp(17),
        }}
      >
        <BackIcon />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontFamily: fontFamily.poppins500,
              fontSize: fontSize(18),
              color: "#000000",
            }}
          >
            Vehicle Details
          </Text>
        </View>
      </View>

      <View
        style={{
          // marginHorizontal: wp(17),
          width: "100%",
          backgroundColor: "#EBEBEB",
          height: hp(1),
          // marginTop: hp(23),
        }}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: hp(25) }}>
        <View>
          <View
            style={{
              marginHorizontal: wp(18),
              marginTop: hp(22),
              borderRadius: wp(10),
              borderWidth: 1,
              borderColor: "#EAEAEA",
              height: hp(50),
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholderTextColor={"#000"}
              placeholder="Vehicle Type"
              style={{
                color: "#000",
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(14),
                paddingLeft: wp(20),
              }}
            />
          </View>

          <View
            style={{
              marginHorizontal: wp(18),
              marginTop: hp(22),
              borderRadius: wp(10),
              borderWidth: 1,
              borderColor: "#EAEAEA",
              height: hp(50),
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholderTextColor={"#000"}
              placeholder="Model Number"
              style={{
                color: "#000",
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(14),
                paddingLeft: wp(20),
              }}
            />
          </View>

          <View
            style={{
              marginHorizontal: wp(18),
              marginTop: hp(22),
              borderRadius: wp(10),
              borderWidth: 1,
              borderColor: "#EAEAEA",
              height: hp(50),
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholderTextColor={"#000"}
              placeholder="Vehicle Number"
              style={{
                color: "#000",
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(14),
                paddingLeft: wp(20),
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: hp(12), alignItems: "center" }}>
        <AddAccountButton />
      </View>
      <View
        style={{
          // marginTop: hp(120),
          marginHorizontal: wp(20),
          marginBottom: hp(24),
        }}
      >
        <GradientButton title={"Update"} />
      </View>
    </SafeAreaView>
  );
};
export default VehicalDetailsScreen;
