import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { BackIcon } from "../../assets";
import GradientButton from "../../components/GradientButton";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
const UpdateProfileDetails = () => {
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
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
            UpdateProfileDetails
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
              placeholder="Full Name"
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
              placeholder="Date of Birth"
              style={{
                color: "#000",
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(14),
                paddingLeft: wp(20),
              }}
            />
          </View>

          <View style={{ marginHorizontal: wp(18), marginTop: hp(28) }}>
            <Text
              style={{
                color: "#000000",
                fontFamily: fontFamily.poppins600,
                fontSize: fontSize(14),
              }}
            >
              Address
            </Text>
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
              placeholder="Block"
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
              placeholder="Buidling"
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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: wp(18),
            }}
          >
            <View
              style={{
                width: wp(163),
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
                placeholder="City"
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
                // marginHorizontal: wp(18),
                width: wp(163),
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
                placeholder="State"
                style={{
                  color: "#000",
                  fontFamily: fontFamily.poppins500,
                  fontSize: fontSize(14),
                  paddingLeft: wp(20),
                }}
              />
            </View>
          </View>

          <View style={{ marginHorizontal: wp(18), marginTop: hp(28) }}>
            <Text
              style={{
                color: "#000000",
                fontFamily: fontFamily.poppins600,
                fontSize: fontSize(14),
              }}
            >
              Contact
            </Text>
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
              placeholder="Mobile Number"
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
              placeholder="Email"
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
      <View
        style={{
          // marginTop: hp(120),
          marginHorizontal: wp(20),
          marginBlock: hp(24),
        }}
      >
        <GradientButton title={"Update"} />
      </View>
    </SafeAreaView>
  );
};
export default UpdateProfileDetails;
