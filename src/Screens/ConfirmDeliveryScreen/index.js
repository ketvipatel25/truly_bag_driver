import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import { BackIcon, ClearButton } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import SignatureCanvas from "react-native-signature-canvas";
import GradientButton from "../../components/GradientButton";
const ConfirmDeliveryScreen = () => {
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
      <ScrollView contentContainerStyle={{ paddingBottom: hp(30) }}>
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
            marginTop: hp(18),
            height: hp(252),
            borderWidth: 1,
            borderColor: "#E8E8E8",
            borderRadius: wp(14),
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
              Enter Customer’s OTP
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: wp(17),
              marginTop: hp(18),
              height: hp(44),
              borderWidth: 1,
              borderColor: "#E8E8E8",
              borderRadius: wp(14),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholderTextColor={"#CECECE"}
              placeholder=" 0 0 0 0"
              style={{
                fontSize: fontSize(12),
                color: colors.black,
                fontFamily: fontFamily.poppins400,
              }}
            />
          </View>

          <View
            style={{
              marginHorizontal: wp(17),
              marginTop: hp(18),
              height: hp(44),
              borderWidth: 1,
              borderColor: "#E8E8E8",
              borderRadius: wp(14),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize(12),
                color: "#5029F4",
                fontFamily: fontFamily.poppins400,
              }}
            >
              Validate Customer
            </Text>
          </View>

          <View
            style={{
              // marginHorizontal: wp(17),
              marginTop: hp(26),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize(12),
                color: "#2B9909",
                fontFamily: fontFamily.poppins400,
              }}
            >
              Customer has been verified
            </Text>
          </View>

          <View
            style={{
              // marginHorizontal: wp(17),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize(16),
                color: "#4D4D4D",
                fontFamily: fontFamily.poppins500,
              }}
            >
              Rajesh Sharma
            </Text>
          </View>
        </View>

        {/* Signature card */}
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
              marginTop: hp(12),
            }}
          />

          {/* Signature canvas: fixed height */}
          <View
            style={{
              height: hp(145),
              marginHorizontal: wp(8),
              marginTop: hp(5),
            }}
          >
            <SignatureCanvas
              ref={signatureRef}
              onOK={handleSignature}
              onEmpty={() => console.log("Signature is empty")}
              onBegin={() => {
                console.log("Started signing");
              }}
              onEnd={() => {
                console.log("Finished drawing");
              }}
              descriptionText=""
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
        html, body {
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
              webviewProps={{
                scrollEnabled: false,
                nestedScrollEnabled: true,
              }}
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: wp(18),
            marginTop: hp(81),
            // backgroundColor: "red",
            height: hp(54),

            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize(12),
              color: colors.black,
              fontFamily: fontFamily.poppins400,
              textAlign: "center",
            }}
          >
            By submitting, I confirm that the product has been successfully
            delivered to the customer at the specified delivery location.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          marginHorizontal: wp(18),
          marginBottom: hp(24),
        }}
      >
        <GradientButton
          title={"Submit to Deliver"}
          buttonStyle={{ borderRadius: wp(14) }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ConfirmDeliveryScreen;
