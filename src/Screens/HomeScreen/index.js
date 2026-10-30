import React from "react";
import { Text, View } from "react-native";
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
import NewOrderComponents from "../../components/NewOrderCompnents";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          width: "100%",
          height: hp(55),
          // backgroundColor: "red",
          justifyContent: "center", // Vertical center
          marginLeft: wp(17),
        }}
      >
        <TrulyBagMainIcon />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          justifyContent: "space-between",
          marginLeft: wp(17),
          marginRight: wp(19),
          marginTop: hp(12),
        }}
      >
        <View
          style={{
            width: wp(163),

            // height: hp(57),
            paddingVertical: hp(10),
            borderColor: "#EBEBEB",
            borderRadius: wp(10),
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <BagCircleIcon />
          </View>
          <View style={{ marginLeft: wp(18) }}>
            <Text
              style={{
                fontFamily: fontFamily.poppins700,
                fontSize: fontSize(16),
                color: colors.black,
              }}
            >
              1200
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.poppins400,
                fontSize: fontSize(12),
                color: colors.black,
              }}
            >
              Today’s Earning
            </Text>
          </View>
        </View>

        <View
          style={{
            width: wp(163),
            // height: hp(57),
            paddingVertical: hp(10),
            borderColor: "#EBEBEB",
            borderRadius: wp(10),
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <BagCircleIcon />
          </View>
          <View style={{ marginLeft: wp(18) }}>
            <Text
              style={{
                fontFamily: fontFamily.poppins700,
                fontSize: fontSize(16),
                color: colors.black,
              }}
            >
              1200
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.poppins400,
                fontSize: fontSize(12),
                color: colors.black,
              }}
            >
              Today’s Earning
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: hp(22), marginLeft: wp(17) }}>
        <Text
          style={{
            fontFamily: fontFamily.poppins600,
            fontSize: fontSize(18),
            color: colors.black,
          }}
        >
          Assigned deliveries
        </Text>
      </View>

      <View>
        <NewOrderComponents />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
