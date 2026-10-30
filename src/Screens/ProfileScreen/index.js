import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon, RightArrow } from "../../assets";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { colors } from "../../utils/colors";
const ProfileScreen = () => {
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
            Profile
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(0) }}>
        <View
          style={{
            height: hp(100),
            width: hp(100),
            borderRadius: wp(60),
            backgroundColor: "#F7E7FF",
            alignSelf: "center",
            marginTop: hp(23),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(25),
              color: colors.black,
              fontFamily: fontFamily.poppins600,
            }}
          >
            RF
          </Text>
        </View>

        <View style={{ marginTop: hp(13), alignItems: "center" }}>
          <Text
            style={{
              fontSize: fontSize(20),
              color: colors.black,
              fontFamily: fontFamily.poppins600,
            }}
          >
            Rajesh Sharma
          </Text>

          <Text
            style={{
              fontSize: fontSize(14),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Joined on 25 July 2026
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: wp(17),
            backgroundColor: "#EBEBEB",
            height: hp(1),
            marginTop: hp(23),
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("MyProfileScreen")}
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            My Profile
          </Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Documents")}
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Documents
          </Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BankDetailsEditScreen")}
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Bank Details
          </Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeliveryHistoryScreen")}
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Delivery History 
          </Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EarningsStack", {
              screen: "EarningsScreen",
            })
          }
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Earnings
          </Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Notifications
          </Text>
          <RightArrow />
        </TouchableOpacity>

        <View
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Help & Support
          </Text>
          <RightArrow />
        </View>

        <View
          style={{
            marginTop: hp(20),
            marginHorizontal: wp(18),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Settings
          </Text>
          <RightArrow />
        </View>

        <View
          style={{
            marginHorizontal: wp(17),
            backgroundColor: "#EBEBEB",
            height: hp(1),
            marginTop: hp(57),
          }}
        />

        <View
          style={{
            marginTop: hp(19),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(15),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
            }}
          >
            Log Out
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
