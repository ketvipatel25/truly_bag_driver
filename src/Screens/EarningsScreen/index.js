import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import {
  BackIcon,
  EarningRupeesIcon,
  FilterIconn,
  ShoppingDeliveryIcon,
  ViewAllButton,
} from "../../assets";
import { colors } from "../../utils/colors";
const EarningsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          width: "100%",
          height: hp(57),
          // backgroundColor: "red",
          justifyContent: "center",
          paddingHorizontal: wp(17),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <BackIcon />
          </View>
          <View>
            <Text
              style={{
                fontSize: fontSize(18),
                fontFamily: fontFamily.poppins500,
                color: colors.black,
              }}
            >
              Earnings
            </Text>
          </View>
          <View>
            <FilterIconn />
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            marginLeft: wp(10),
            marginRight: wp(10),
            marginTop: hp(16),
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "red",
          }}
        >
          <TouchableOpacity
            style={{
              width: hp(105),
              // height: hp(107),
              paddingVertical: hp(16),
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: wp(10),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: hp(30),
                height: hp(30),
                borderRadius: wp(7),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F4F1FF",
              }}
            >
              <EarningRupeesIcon />
            </View>
            <View style={{ marginTop: hp(8) }}>
              <Text
                style={{
                  fontFamily: fontFamily.poppins700,
                  fontSize: fontSize(16),
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                5
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(10),
                  color: "#000000",
                }}
              >
                New Order
              </Text>
            </View>
          </TouchableOpacity>

          {/* second */}

          <TouchableOpacity
            style={{
              width: hp(105),
              // height: hp(107),
              paddingVertical: hp(16),
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: wp(10),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: hp(30),
                height: hp(30),
                borderRadius: wp(7),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF5F1",
              }}
            >
              <ShoppingDeliveryIcon />
            </View>
            <View style={{ marginTop: hp(8) }}>
              <Text
                style={{
                  fontFamily: fontFamily.poppins700,
                  fontSize: fontSize(16),
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                120
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(10),
                  color: "#000000",
                }}
              >
                Total Order
              </Text>
            </View>
          </TouchableOpacity>

          {/* third */}

          <TouchableOpacity
            style={{
              width: hp(105),
              // height: hp(107),
              paddingVertical: hp(16),
              borderWidth: 1,
              borderColor: "#EBEBEB",
              borderRadius: wp(10),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: hp(30),
                height: hp(30),
                borderRadius: wp(7),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F4F1FF",
              }}
            >
              <ShoppingDeliveryIcon />
            </View>
            <View style={{ marginTop: hp(8) }}>
              <Text
                style={{
                  fontFamily: fontFamily.poppins700,
                  fontSize: fontSize(16),
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                12.5K
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(10),
                  color: "#000000",
                }}
              >
                Total Sales
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: wp(17),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: hp(33),
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.poppins600,
            fontSize: fontSize(14),
            color: "#000000",
          }}
        >
          Completed Deliveries
        </Text>
        <TouchableOpacity>
          <ViewAllButton />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default EarningsScreen;
