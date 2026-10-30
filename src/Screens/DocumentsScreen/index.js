import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { BackIcon, DocumentIcon, RightArrow } from "../../assets";
import { colors } from "../../utils/colors";
const DocumentsScreen = () => {
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
            Documents
          </Text>
        </View>
      </View>

      <View
        style={{
          // marginHorizontal: wp(17),
          width: "100%",
          backgroundColor: "#EBEBEB",
          height: hp(1),
          // marginTop: hp(17),
        }}
      />

      <View
        style={{
          marginHorizontal: wp(17),
          // height: hp(74),
          paddingVertical: hp(22),
          borderColor: "#EBEBEB",
          borderWidth: 1,
          borderRadius: wp(10),
          marginTop: hp(23),
          paddingHorizontal: wp(13),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DocumentIcon />

            <Text
              style={{
                fontSize: fontSize(14),
                color: colors.black,
                fontFamily: fontFamily.poppins400,
                marginLeft: wp(17),
              }}
            >
              Documents
            </Text>
          </View>
          <RightArrow />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: wp(17),
          // height: hp(74),
          paddingVertical: hp(22),
          borderColor: "#EBEBEB",
          borderWidth: 1,
          borderRadius: wp(10),
          marginTop: hp(19),
          paddingHorizontal: wp(13),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DocumentIcon />

            <Text
              style={{
                fontSize: fontSize(14),
                color: colors.black,
                fontFamily: fontFamily.poppins400,
                marginLeft: wp(17),
              }}
            >
              Address Proof
            </Text>
          </View>
          <RightArrow />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DocumentsScreen;
