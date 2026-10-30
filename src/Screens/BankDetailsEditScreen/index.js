import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { BackIcon, DocumentIcon, RightArrow } from "../../assets";
import { colors } from "../../utils/colors";
const BankDetailsEditScreen = () => {
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
            Bank Details
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
            <View>
              <Text
                style={{
                  fontSize: fontSize(14),
                  color: colors.black,
                  fontFamily: fontFamily.poppins400,
                  marginLeft: wp(17),
                }}
              >
                Bank Account: ****4589
              </Text>

              <Text
                style={{
                  fontSize: fontSize(12),
                  color: "#686868",
                  fontFamily: fontFamily.poppins400,
                  marginLeft: wp(17),
                }}
              >
                UPI ID: john@upi
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: hp(14),
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: fontSize(12),
                color: "#5029F4",
                fontFamily: fontFamily.poppins400,
                marginRight: wp(21),
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: fontSize(12),
                color: "#5029F4",
                fontFamily: fontFamily.poppins400,
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BankDetailsEditScreen;
