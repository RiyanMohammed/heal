import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const StaffPage2 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.staffPage2}
      locations={[0, 0.31]}
      colors={["#d9ebff", "#e1f4cb"]}
    >
      <View style={styles.staffPage2Child} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.profile, styles.id4223Clr]}>Profile</Text>
      <Text style={[styles.id4223, styles.id4223Clr]}>ID: 4223</Text>
      <Text style={[styles.welcomeToVBus, styles.countPosition]}>
        Welcome to V-Bus !
      </Text>
      <View style={[styles.history, styles.countPosition]}>
        <Text style={[styles.history1, styles.history1Typo]}>History:</Text>
        <View style={[styles.historyChild, styles.childBorder]} />
      </View>
      <View style={[styles.toggle, styles.toggleLayout]}>
        <Text style={[styles.liveButton, styles.toggleLayout]}>
          Live button:
        </Text>
      </View>
      <View style={[styles.count, styles.countPosition]}>
        <Text style={[styles.history1, styles.history1Typo]}>count:</Text>
        <View style={[styles.countChild, styles.childBorder]} />
      </View>
      <Pressable
        style={[styles.liveButton1, styles.liveLayout]}
        onPress={() => navigation.navigate("StaffPage")}
      >
        <View style={[styles.liveButton2, styles.liveLayout]}>
          <Image
            style={[styles.liveButton2, styles.liveLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.liveButtonItem}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={styles.liveButtonInner}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.off}>OFF</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  id4223Clr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  countPosition: {
    left: 28,
    position: "absolute",
  },
  history1Typo: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.kadwaRegular,
    top: 0,
    textAlign: "left",
    left: 0,
  },
  childBorder: {
    borderColor: Color.colorSteelblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  toggleLayout: {
    height: 33,
    width: 159,
    position: "absolute",
  },
  liveLayout: {
    height: 214,
    width: 223,
    position: "absolute",
  },
  staffPage2Child: {
    top: 161,
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorAliceblue,
    width: 390,
    height: 744,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.2%",
    width: "7.69%",
    top: "12.56%",
    right: "85.13%",
    bottom: "84.24%",
    left: "7.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    left: 61,
    height: 21,
    width: 110,
    textAlign: "left",
    fontFamily: FontFamily.kadwaBold,
    fontWeight: "700",
    top: 99,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  id4223: {
    left: 273,
    width: 138,
    height: 32,
    textAlign: "left",
    fontFamily: FontFamily.kadwaBold,
    fontWeight: "700",
    top: 99,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  welcomeToVBus: {
    top: 40,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.blackHanSansRegular,
    width: 355,
    textAlign: "left",
    color: Color.colorWhite,
  },
  history1: {
    height: 31,
    width: 110,
    fontSize: FontSize.size_xl,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.kadwaRegular,
    position: "absolute",
  },
  historyChild: {
    top: 36,
    borderWidth: 4,
    height: 186,
    width: 333,
  },
  history: {
    top: 602,
    height: 222,
    width: 333,
  },
  liveButton: {
    fontSize: FontSize.size_5xl,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.kadwaRegular,
    top: 0,
    textAlign: "left",
    left: 0,
  },
  toggle: {
    top: 176,
    left: 32,
  },
  countChild: {
    top: 55,
    borderWidth: 5,
    width: 90,
    height: 74,
  },
  count: {
    top: 441,
    height: 129,
    width: 110,
  },
  liveButton2: {
    top: 0,
    height: 214,
    width: 223,
    left: 0,
  },
  liveButtonItem: {
    top: 14,
    left: 17,
    width: 192,
    height: 184,
    position: "absolute",
  },
  liveButtonInner: {
    top: 21,
    left: 30,
    width: 166,
    height: 170,
    position: "absolute",
  },
  off: {
    top: 71,
    left: 68,
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.kanitRegular,
    color: Color.colorSteelblue_100,
    width: 93,
    height: 35,
    textAlign: "left",
    position: "absolute",
  },
  liveButton1: {
    top: 234,
    left: 94,
  },
  staffPage2: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default StaffPage2;
