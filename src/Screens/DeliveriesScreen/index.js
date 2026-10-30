import React from "react";
import { Text } from "react-native";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SmallTrulyBag } from "../../assets";
import { colors } from "../../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import NewScreen from "../NewScreen";
import { fontFamily, fontSize, hp, wp } from "../../utils/helpers";
import ReturnScreen from "../ReturnScreen";
import DeliveriesOrderScreen from "../DeliveriesOrderScreen";

const DeliveredScreen = () => {
  const [activeTab, setActiveTab] = useState("New");
  const tabs = ["New", "Delivered", "Return"];

  // Render content based on current tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "New":
        return (
          <View style={{ flex: 1 }}>
            <NewScreen />
          </View>
        );
      case "Delivered":
        return (
          <View style={{ flex: 1 }}>
            <DeliveriesOrderScreen />
          </View>
        );
      case "Return":
        return (
          <View style={{}}>
            <ReturnScreen />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          width: "100%",
          height: hp(57),
          // backgroundColor: "pink",
          alignItems: "center",
          // marginTop: hp(14),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.poppins500,
            fontSize: fontSize(18),
            color: "#000000",
          }}
        >
          Deliveries
        </Text>
      </View>

      <View
        style={{ width: "100%", height: hp(1), backgroundColor: "#F2F2F2" }}
      />
      {/* Horizontal, scrollable tabs */}
      <View style={{ height: hp(50), marginTop: hp(18), marginBottom: hp(10) }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContent}
        >
          {tabs.map((tab, index) => {
            const isActive = tab === activeTab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[
                  styles.tabButton,
                  {
                    backgroundColor: isActive ? colors.black : "#F7F7F7",
                    marginRight: index === tabs.length - 1 ? 0 : wp(15),
                  },
                ]}
              >
                <Text
                  style={{
                    color: isActive ? colors.white : colors.black,
                    fontFamily: fontFamily.poppins400,
                    fontSize: fontSize(12),
                  }}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Tab-specific Content */}
      <View style={{ flex: 1 }}>{renderTabContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 18,
  },
  headerTitle: {
    fontSize: fontSize(18),
    color: colors.black,
    lineHeight: hp(26),
    fontFamily: fontFamily.poppins500,
  },
  divider: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
  tabsContent: {
    paddingVertical: hp(8),
    paddingHorizontal: wp(18),
  },
  tabButton: {
    paddingVertical: hp(8),
    paddingHorizontal: wp(40),
    borderRadius: wp(20),
    alignItems: "center",
    justifyContent: "center",
  },
  screenContent: {
    flex: 1,
  },
});
export default DeliveredScreen;
