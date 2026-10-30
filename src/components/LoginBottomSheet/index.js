import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { fontFamily, fontSize, hp, wp, Touchable } from "../../utils/helpers";
import GradientButton from "../GradientButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";
import { OtpInput } from "react-native-otp-entry";
import { useEffect } from "react";
const LoginBottomSheet = forwardRef((props, ref) => {
  const loginSheetRef = useRef(null);
  const resetPasswordSheetRef = useRef(null);
  const verifyBottomSheetRef = useRef(null);

  const newPasswordSheetRef = useRef();
  const notificationSheetRef = useRef();
  // const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  // Reset Password states
  const [resetValue, setResetValue] = useState("");
  const [otpDestination, setOtpDestination] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendVisible, setResendVisible] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!otpSent || timer <= 0) {
      if (otpSent && timer <= 0) {
        setResendVisible(true);
      }
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, otpSent]);

  // // Allow parent to trigger open method
  // useImperativeHandle(ref, () => ({
  //   open: () => bottomSheetRef.current?.open(),
  // }));

  const formatMobileNumber = (text) => {
    let formattedText = text.replace(/[^\d]/g, "");
    if (formattedText.length > 5) {
      formattedText =
        formattedText.slice(0, 5) + " " + formattedText.slice(5, 10);
    }
    return formattedText.slice(0, 13);
  };
  const handleVerifyCode = () => {
    console.log("Login button pressed");

    // Close Login bottom sheet
    ref.current?.close();

    // Open Main Tabs and show Home screen
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "MainTabs",
            state: {
              routes: [{ name: "HomeStack" }],
            },
          },
        ],
      });
    }, 300);
  };
  const handleResetPassword = () => {
    console.log("Handle Reset Password");

    const value = resetValue.trim();

    // Start the timer when OTP is sent
    setTimer(60);
    setResendVisible(false);
    setOtpSent(true);

    resetPasswordSheetRef.current?.close();

    setTimeout(() => {
      verifyBottomSheetRef.current?.open();
    }, 300);
  };
  //resent otp
  const handleResendOtp = () => {
    if (!resendVisible) {
      return;
    }

    setTimer(60);
    setResendVisible(false);
    setOtpSent(true);

    console.log("Resend OTP pressed");
  };
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const onVerifyPress = () => {
    console.log("Verify button pressed");

    // Step 1: Close Verify OTP bottom sheet
    verifyBottomSheetRef.current?.close();

    // Step 2: Open Set Password bottom sheet
    setTimeout(() => {
      newPasswordSheetRef.current?.open();
    }, 300);
  };

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8}$/;

  const isPasswordValid =
    passwordRegex.test(newPassword) && confirmPassword === newPassword;

  const handleSetPassword = () => {
    const value = otpDestination?.trim();

    // let payload = {};

    // if (isValidEmail(value)) {
    //   payload = {
    //     email: value,
    //     otp: Number(otp),
    //     password: newPassword,
    //   };
    // } else if (isValidMobile(value)) {
    //   payload = {
    //     mobileNumber: value,
    //     otp: Number(otp),
    //     password: newPassword,
    //   };
    // } else {
    //   return;
    // }

    // console.log("RESET PASSWORD PAYLOAD =>", payload);

    // dispatch(sellerResetPasswordRequest(payload));

    newPasswordSheetRef.current?.close();

    setTimeout(() => {
      ref.current?.open(); // Login sheet
    }, 300);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <RBSheet
        ref={ref}
        height={hp(464)}
        openDuration={250}
        closeDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: wp(25),
            borderTopRightRadius: wp(25),
          },
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: hp(31),
            marginHorizontal: wp(38),
          }}
        >
          <Text
            style={{
              fontSize: fontSize(18),
              color: "black",
              fontFamily: fontFamily.poppins500,
            }}
          >
            Driver Login
          </Text>

          <View style={{ marginTop: hp(39) }}>
            <View
              style={{
                width: "100%",
                height: hp(50),
                borderWidth: 1,
                borderRadius: wp(50),
                paddingHorizontal: wp(28),
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#DDDDDD",
              }}
            >
              <TextInput
                placeholder="Enter Email or Mobile "
                placeholderTextColor={"#000000"}
                style={{
                  flex: 1,
                  height: hp(50),
                  fontSize: fontSize(16),
                  color: "black",
                }}
                keyboardType="default"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                autoCapitalize="none"
              />
            </View>
            <View style={{ marginTop: hp(15) }}>
              <View
                style={{
                  width: "100%",
                  height: hp(50),
                  borderWidth: 1,
                  borderRadius: wp(50),
                  paddingHorizontal: wp(28),
                  flexDirection: "row",
                  alignItems: "center",
                  borderColor: "#DDDDDD",
                }}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"#000000"}
                  style={{
                    flex: 1,
                    height: hp(50),
                    fontSize: fontSize(16),
                    color: "black",
                  }}
                  keyboardType="default"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  // autoCorrect={false}
                />
              </View>
            </View>
            <View style={{ marginTop: hp(28) }}>
              <GradientButton
                title="Login"
                onPress={handleVerifyCode}
                // disabled={!isValid || loading}
                buttonStyle={{
                  width: "100%",
                  height: hp(50),
                  borderRadius: wp(25),
                  // opacity: isValid ? 1 : 0.5,
                }}
                textStyle={{
                  fontSize: fontSize(16),
                  fontFamily: fontFamily.poppins500,
                  lineHeight: hp(24),
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              ref.current?.close();

              setTimeout(() => {
                resetPasswordSheetRef.current?.open();
              }, 300);
            }}
            style={{
              marginTop: hp(19),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#5029F3",
                fontSize: fontSize(16),
                fontFamily: fontFamily.poppins400,
              }}
            >
              Reset Password
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              height: hp(1),
              backgroundColor: "#E1E1E1",
              marginTop: hp(23),
            }}
          />
        </View>

        <TouchableOpacity
          // onPress={() => setShowNoticeModal(true)}
          style={{
            marginTop: hp(27),
            borderWidth: 1,
            borderColor: "#D1D1D1",
            height: hp(50),
            // width: "100%",
            borderRadius: wp(27),
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: wp(38),
          }}
        >
          <Text
            style={{
              color: "#5029F4",
              fontFamily: fontFamily.poppins500,
              fontSize: fontSize(16),
            }}
          >
            Become Seller on Trulybag
          </Text>
        </TouchableOpacity>
      </RBSheet>

      <RBSheet
        ref={resetPasswordSheetRef}
        height={hp(381)}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: wp(25),
            borderTopRightRadius: wp(25),
          },
        }}
      >
        <View style={{ marginTop: hp(31), alignItems: "center" }}>
          <Text
            style={{
              fontSize: fontSize(18),
              color: "black",
              fontFamily: fontFamily.poppins500,
            }}
          >
            Reset Password
          </Text>
        </View>
        <View style={{ marginTop: hp(39), marginHorizontal: wp(38) }}>
          <View
            style={{
              // width: '100%',
              height: hp(50),
              borderWidth: 1,
              borderRadius: wp(50),
              paddingHorizontal: wp(28),
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#DDDDDD",
            }}
          >
            <TextInput
              placeholder="Enter Email or Mobile "
              placeholderTextColor={"#000000"}
              style={{
                flex: 1,
                height: hp(50),
                fontSize: fontSize(16),
                color: "black",
              }}
              value={resetValue}
              onChangeText={setResetValue}
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={{ marginTop: hp(39), marginHorizontal: wp(38) }}>
          <GradientButton
            title="Send OTP"
            onPress={handleResetPassword}
            // disabled={!isResetValid || forgotPasswordLoading}
            buttonStyle={{
              width: "100%",
              height: hp(50),
              borderRadius: wp(25),
              // opacity: isResetValid ? 1 : 0.5,
            }}
            textStyle={{
              fontSize: fontSize(16),
              fontFamily: fontFamily.poppins500,
              lineHeight: hp(24),
            }}
          />
        </View>
      </RBSheet>

      {/* Second Bottom Sheet */}
      <RBSheet
        ref={verifyBottomSheetRef}
        height={hp(376)}
        openDuration={250}
        closeDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: wp(25),
            borderTopRightRadius: wp(25),
          },
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: hp(31),
            marginHorizontal: wp(35),
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: fontSize(18),
              lineHeight: hp(26),
              fontFamily: fontFamily.poppins500,
            }}
          >
            Verify OTP
          </Text>

          <View>
            <Text
              style={{
                fontSize: fontSize(14),
                lineHeight: hp(20),
                color: "black",
                fontFamily: fontFamily.poppins400,
                marginTop: hp(8),
                textAlign: "center",
              }}
            >
              sent on{" "}
              <Text style={{ color: "#704EFE" }}> {otpDestination}</Text>
            </Text>

            <View style={{ marginTop: hp(59) }}>
              <OtpInput
                numberOfDigits={4}
                type="numeric"
                onTextChange={handleOtpChange}
                theme={{
                  pinCodeContainerStyle: {
                    width: hp(69),
                    height: hp(50),
                    borderWidth: 1,
                    borderRadius: 14,
                    backgroundColor: "#F6F6F6", // ✅ Add background color here
                    borderColor: "#E0E0E0", // Optional: lighter border
                  },
                  pinCodeTextStyle: {
                    fontSize: fontSize(22),
                    color: "#000",
                    fontFamily: fontFamily.poppins400,
                  },
                }}
                focusColor="black"
              />
            </View>

            <View style={{ marginTop: hp(32) }}>
              <Touchable
                // disabled={!resendVisible}
                onPress={handleResendOtp}
              >
                <Text
                  style={{
                    fontSize: fontSize(14),
                    color: resendVisible ? "black" : "gray",
                    flexDirection: "row",
                    textAlign: "center",
                    lineHeight: hp(20),
                    fontFamily: fontFamily.poppins400,
                  }}
                >
                  {resendVisible ? (
                    "Resend"
                  ) : (
                    <>
                      Resend in{" "}
                      <Text style={{ color: "#714FFE" }}>{formatTime()}</Text>
                    </>
                  )}
                </Text>
              </Touchable>

              <View style={{ marginTop: hp(32) }}>
                <GradientButton
                  title="Verify"
                  // onPress={() => {
                  //   verifyBottomSheetRef.current?.close();
                  // }}
                  onPress={onVerifyPress}
                  // disabled={otp.length !== 4 || verifyResetOtpLoading}
                  buttonStyle={{
                    width: "100%",
                    height: hp(50),
                    borderRadius: wp(25),
                    // opacity:
                    //   otp.length === 4 && !verifyResetOtpLoading ? 1 : 0.5,
                  }}
                  textStyle={{
                    fontSize: fontSize(16),
                    fontFamily: fontFamily.poppins500,
                    lineHeight: hp(24),
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </RBSheet>

      <RBSheet
        ref={newPasswordSheetRef}
        height={hp(381)}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: wp(25),
            borderTopRightRadius: wp(25),
          },
        }}
      >
        <View
          style={{
            marginTop: hp(31),
            // marginHorizontal: wp(38),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.poppins500,
              fontSize: fontSize(18),
              color: "black",
            }}
          >
            Set Password
          </Text>
        </View>
        <View style={{ marginTop: hp(39), marginHorizontal: wp(38) }}>
          <View
            style={{
              width: "100%",
              height: hp(50),
              borderWidth: 1,
              borderRadius: wp(50),
              paddingHorizontal: wp(28),
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#DDDDDD",
            }}
          >
            <TextInput
              placeholder="New Password"
              placeholderTextColor={"#000000"}
              style={{
                flex: 1,
                height: hp(50),
                fontSize: fontSize(16),
                fontFamily: fontFamily.poppins400,
                color: "black",
              }}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        <View style={{ marginTop: hp(19), marginHorizontal: wp(38) }}>
          <View
            style={{
              width: "100%",
              height: hp(50),
              borderWidth: 1,
              borderRadius: wp(50),
              paddingHorizontal: wp(28),
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#DDDDDD",
            }}
          >
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={"#000000"}
              style={{
                flex: 1,
                height: hp(50),
                fontSize: fontSize(16),
                fontFamily: fontFamily.poppins400,
                color: "black",
              }}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={{ marginTop: hp(70) }}>
            <GradientButton
              title="Submit"
              onPress={handleSetPassword}
              // disabled={!isPasswordValid || resetPasswordLoading}
              buttonStyle={{
                width: "100%",
                height: hp(50),
                borderRadius: wp(25),
                // opacity: isPasswordValid ? 1 : 0.5,
              }}
              textStyle={{
                fontSize: fontSize(16),
                fontFamily: fontFamily.poppins500,
                lineHeight: hp(24),
              }}
            />
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontSize: fontSize(20),
    fontFamily: fontFamily.poppins600,
    color: "#000000",
  },
});

export default LoginBottomSheet;
