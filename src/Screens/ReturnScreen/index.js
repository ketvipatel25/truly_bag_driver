import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import {
  BagCircleIcon,
  DetailsButton,
  NewButton,
  PickupIcon,
  SecondDeliveryIcon,
  TrulyBagMainIcon,
} from "../../assets";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { useNavigation } from "@react-navigation/native";

const ReturnScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          // height: hp(238),
          borderWidth: 1,
          borderColor: "#E7E7E7",
          marginHorizontal: wp(17),
          // marginTop: hp(19),
          borderRadius: wp(14),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: wp(13),
            marginTop: hp(18),
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(12),
                color: colors.black,
              }}
            >
              Order ID :{" "}
            </Text>

            <Text
              style={{
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(12),
                color: "#7A7A7A",
              }}
            >
              #443224
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: wp(14) }}>
              <NewButton />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReturnDetailsScreen")}
            >
              <DetailsButton />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: wp(16),
            marginTop: hp(24),
          }}
        >
          <View>
            <PickupIcon />
          </View>
          <View style={{ marginLeft: wp(23) }}>
            <Text
              style={{
                fontFamily: fontFamily.poppins600,
                fontSize: fontSize(13),
                color: colors.black,
              }}
            >
              Pickup : ABC Fashion
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(13),
                color: colors.black,
              }}
            >
              123, Sector 3C, Gandhinagar
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 1,
            height: hp(36),
            borderLeftWidth: 1,
            borderColor: "#BDBDBD",
            borderStyle: "dashed",
            marginLeft: wp(27),
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: wp(16),
            // marginTop: hp(24),
          }}
        >
          <View>
            <SecondDeliveryIcon />
          </View>
          <View style={{ marginLeft: wp(23) }}>
            <Text
              style={{
                fontFamily: fontFamily.poppins600,
                fontSize: fontSize(13),
                color: colors.black,
              }}
            >
              Delivery : Rajesh Sharma
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.poppins500,
                fontSize: fontSize(13),
                color: colors.black,
              }}
            >
              20, Sectoe 24, Gandhinagar
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: wp(13),
            height: hp(55),
            backgroundColor: "#F8F7FF",
            borderRadius: wp(10),
            marginTop: hp(18),
            justifyContent: "center",
            marginBottom: hp(15),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: wp(21),
            }}
          >
            <View style={{ width: wp(60) }}>
              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(10),
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                You’ll Earn
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins600,
                  fontSize: fontSize(13),
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                ₹120
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: hp(34),
                borderLeftWidth: 1,
                borderColor: "#DDD8FE",
                // borderStyle: "dashed",
                // marginLeft: wp(27),
              }}
            />
            <View style={{ width: wp(60) }}>
              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(10),
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                Distance
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins600,
                  fontSize: fontSize(13),
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                8.2 KM
              </Text>
            </View>
            <View style={{ width: wp(75) }}>
              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(10),
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                Assigned on
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins600,
                  fontSize: fontSize(13),
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                10:30 AM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ReturnScreen;
