import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { useNavigation } from "@react-navigation/native";
import SignatureCanvas from "react-native-signature-canvas";
import {
  BackIcon,
  ClearButton,
  DeliveredIcon,
  DeliveryIcon,
  OrderImage,
  PickupIcon,
  ReturnButton,
  SecondDeliveryIcon,
} from "../../assets";
import { colors } from "../../utils/colors";
import GradientButton from "../../components/GradientButton";
const DeliveredDetailsScreen = () => {
  const navigation = useNavigation();
  const signatureRef = useRef(null);

  const handleClearSignature = () => {
    signatureRef.current?.clearSignature();
  };

  const handleSignature = (signature) => {
    console.log("Customer signature:", signature);
    // signature is a Base64 image string
  };
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
            Order Details
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

      <ScrollView contentContainerStyle={{ paddingBottom: hp(20) }}>
        <View
          style={{
            marginHorizontal: wp(17),
            marginTop: hp(18),
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: wp(14),
            // height: hp(182),
          }}
        >
          <View style={{ marginHorizontal: wp(17), marginTop: hp(18) }}>
            <Text
              style={{
                fontSize: fontSize(12),
                color: colors.black,
                fontFamily: fontFamily.poppins400,
              }}
            >
              Order Information
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: wp(17),
              backgroundColor: "#E8E8E8",
              height: hp(1),
              marginTop: hp(15),
            }}
          />

          <View
            style={{
              marginHorizontal: wp(17),
              marginTop: hp(18),
            }}
          >
            {/* Header Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: hp(4),
              }}
            >
              <Text
                style={{
                  fontSize: fontSize(13),
                  color: "#9A9A9A",
                  fontFamily: fontFamily.poppins400,
                }}
              >
                Order ID
              </Text>

              <Text
                style={{
                  fontSize: fontSize(13),
                  color: "#9A9A9A",
                  fontFamily: fontFamily.poppins400,
                }}
              >
                Status
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: fontSize(13),
                  color: "#000000",
                  fontFamily: fontFamily.poppins400,
                }}
              >
                TB10254
              </Text>

              <Text
                style={{
                  fontSize: fontSize(13),
                  color: "#2B9909",
                  fontFamily: fontFamily.poppins600,
                }}
              >
                Delivered
              </Text>
            </View>

            <View
              style={{
                marginBottom: hp(18),
              }}
            >
              <Text
                style={{
                  fontSize: fontSize(13),
                  color: "#9A9A9A",
                  fontFamily: fontFamily.poppins400,
                }}
              >
                Pending
              </Text>

              <Text
                style={{
                  fontSize: fontSize(13),
                  color: "#9A9A9A",
                  fontFamily: fontFamily.poppins400,
                }}
              >
                -
              </Text>
            </View>
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

        <View
          style={{
            marginHorizontal: wp(13),
            // height: hp(352),

            borderColor: "#E8E8E8",
            borderRadius: wp(15),
            marginTop: hp(18),
            marginBottom: hp(15),
            borderWidth: 1,
          }}
        >
          {/* Pickup section */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: wp(16),
              marginTop: hp(24),
            }}
          >
            {/* Icon and vertical dashed line */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <PickupIcon />

              <View
                style={{
                  width: 1,
                  height: hp(134),
                  borderLeftWidth: 1,
                  borderColor: "#BDBDBD",
                  borderStyle: "dashed",
                  marginTop: hp(5),
                }}
              />
            </View>

            {/* Pickup details */}
            <View
              style={{
                marginLeft: wp(23),
                flex: 1,
                marginRight: wp(10),
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.poppins600,
                  fontSize: fontSize(12),
                  color: colors.black,
                }}
              >
                Picked From
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(13),
                  color: colors.black,
                  marginTop: hp(13),
                }}
              >
                Rahul Sharma
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(13),
                  color: colors.black,
                }}
              >
                +91 10022 32321
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(12),
                  color: "#717171",
                  width: wp(226),
                  marginTop: hp(6),
                }}
              >
                204, Shreeji Heights, Near ISKCON Temple, SG Highway, Ahmedabad,
                Gujarat - 380015
              </Text>
            </View>
          </View>

          {/* Delivered To section */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: wp(16),
              // marginTop: hp(24),
            }}
          >
            {/* Icon and vertical dashed line */}
            <View
              style={{
                alignItems: "center",
              }}
            >
              <SecondDeliveryIcon />

              <View
                style={{
                  width: 1,
                  height: hp(115),
                  borderLeftWidth: 1,
                  borderColor: "#BDBDBD",
                  borderStyle: "dashed",
                  marginTop: hp(5),
                }}
              />
            </View>

            {/* Pickup details */}
            <View
              style={{
                marginLeft: wp(23),
                flex: 1,
                marginRight: wp(10),
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.poppins600,
                  fontSize: fontSize(12),
                  color: colors.black,
                }}
              >
                Delivered To
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(13),
                  color: colors.black,
                  marginTop: hp(13),
                }}
              >
                Rahul Sharma
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(13),
                  color: colors.black,
                }}
              >
                +91 ****
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.poppins400,
                  fontSize: fontSize(12),
                  color: "#717171",
                  width: wp(226),
                  marginTop: hp(6),
                  marginBottom: hp(36),
                }}
              >
                204, Shreeji Heights, Near ISKCON Temple, SG Highway, Ahmedabad,
                Gujarat - 380015
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: wp(17),
            // marginTop: hp(18),
            // height: hp(233),
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: wp(14),
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <View
            style={{
              marginHorizontal: wp(17),
              marginTop: hp(16),
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: fontSize(12),
                color: colors.black,
                fontFamily: fontFamily.poppins400,
              }}
            >
              Delivery Photo
            </Text>
          </View>

          {/* Divider */}
          <View
            style={{
              marginHorizontal: wp(17),
              backgroundColor: "#E8E8E8",
              height: 1,
              marginTop: hp(15),
            }}
          />

          <View style={{ alignItems: "center", paddingVertical: hp(18) }}>
            <OrderImage />
          </View>
        </View>
        {/* Customer Signature Card */}
        <View
          style={{
            marginHorizontal: wp(17),
            marginTop: hp(18),
            height: hp(233),
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: wp(14),
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <View
            style={{
              marginHorizontal: wp(17),
              marginTop: hp(18),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: fontSize(12),
                color: colors.black,
                fontFamily: fontFamily.poppins400,
              }}
            >
              Customer’s Sign
            </Text>

            <TouchableOpacity onPress={handleClearSignature}>
              <ClearButton />
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View
            style={{
              marginHorizontal: wp(17),
              backgroundColor: "#E8E8E8",
              height: 1,
              marginTop: hp(15),
            }}
          />

          {/* Signature Canvas */}
          <View
            style={{
              height: hp(170),
              marginHorizontal: wp(8),
              paddingVertical: hp(5),
            }}
          >
            <SignatureCanvas
              ref={signatureRef}
              onOK={handleSignature}
              onEmpty={() => console.log("Signature is empty")}
              onBegin={() => console.log("Started signing")}
              onEnd={() => console.log("Finished drawing")}
              descriptionText=""
              clearText=""
              confirmText=""
              webStyle={`
                      .m-signature-pad {
                        box-shadow: none;
                        border: none;
                        margin: 0;
                        width: 100%;
                        height: 100%;
                      }
                        .m-signature-pad--body {  
                          border: none;
                          left: 0;
                          right: 0;
                          top: 0;
                          bottom: 0;
                        }
                        .m-signature-pad--footer {
                          display: none;
                        }
                        body, html {
                          width: 100%;
                          height: 100%;
                          margin: 0;
                          padding: 0;
                          overflow: hidden;
                        }
                      `}
              backgroundColor="#FFFFFF"
              penColor="#000000"
              imageType="image/png"
              autoClear={false}
              style={{ flex: 1 }}
              nestedScrollEnabled={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DeliveredDetailsScreen;
