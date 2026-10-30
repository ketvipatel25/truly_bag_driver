import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { BackIcon, EditButton } from "../../assets";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
const MyProfileScreen = () => {
  const navigation = useNavigation();
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
            My Profile
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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: wp(18),
          marginTop: hp(20),
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.poppins600,
            fontSize: fontSize(15),
            color: "#000000",
          }}
        >
          Personal Details
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("UpdateProfileDetails")}
        >
          <EditButton />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: wp(18), marginTop: hp(10) }}>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
            }}
          >
            Full Name
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
              marginTop: hp(7),
            }}
          >
            Mobile Number
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
              marginTop: hp(7),
            }}
          >
            Email Address (Optional)
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
              marginTop: hp(7),
            }}
          >
            Date of Birth (Optional)
          </Text>
        </View>

        <View
          style={{
            // marginHorizontal: wp(17),
            width: "100%",
            backgroundColor: "#EBEBEB",
            height: hp(1),
            marginTop: hp(17),
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: wp(18),
          marginTop: hp(20),
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.poppins600,
            fontSize: fontSize(15),
            color: "#000000",
          }}
        >
          Vehicle Information
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("VehicalDetailsScreen")}
        >
          <EditButton />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: wp(18), marginTop: hp(10) }}>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
            }}
          >
            Vehicle Type (Bike/Scooter/Car)
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
              marginTop: hp(7),
            }}
          >
            Vehicle Number
          </Text>
        </View>

        <View
          style={{
            // marginHorizontal: wp(17),
            width: "100%",
            backgroundColor: "#EBEBEB",
            height: hp(1),
            marginTop: hp(17),
          }}
        />
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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: wp(18),
          marginTop: hp(20),
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.poppins600,
            fontSize: fontSize(15),
            color: "#000000",
          }}
        >
          Bank Details
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("BankDetailsScreen")}
        >
          <EditButton />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: wp(18), marginTop: hp(10) }}>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
            }}
          >
            Bank Account: ****4589
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: fontFamily.poppins400,
              fontSize: fontSize(15),
              color: "#000000",
              marginTop: hp(7),
            }}
          >
            UPI ID: john@upi
          </Text>
        </View>

        <View
          style={{
            // marginHorizontal: wp(17),
            width: "100%",
            backgroundColor: "#EBEBEB",
            height: hp(1),
            marginTop: hp(17),
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default MyProfileScreen;
