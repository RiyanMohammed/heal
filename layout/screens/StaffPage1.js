import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const StaffPage1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.staffPage1}
      locations={[0, 0.31]}
      colors={["#d9ebff", "#e1f4cb"]}
    >
      <View style={styles.staffPage1Child} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.profile, styles.id4223Clr]}>Profile</Text>
      <Text style={[styles.id4223, styles.id4223Clr]}>ID: 4223</Text>
      <Text style={[styles.welcomeToVBus, styles.welcomeToVBusPosition]}>
        Welcome to V-Bus !
      </Text>
      <View style={[styles.toggle, styles.toggleLayout]}>
        <Text style={[styles.liveButton, styles.livePosition]}>
          Live button:
        </Text>
      </View>
      <Pressable
        style={[styles.liveButton1, styles.liveLayout]}
        onPress={() => navigation.navigate("StaffPage2")}
      >
        <Image
          style={[styles.liveButtonChild, styles.liveLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.liveButtonItem, styles.welcomeToVBusPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={styles.liveButtonInner}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Text style={styles.on}>ON</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  id4223Clr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  welcomeToVBusPosition: {
    left: 28,
    position: "absolute",
  },
  toggleLayout: {
    height: 33,
    width: 131,
    position: "absolute",
  },
  livePosition: {
    top: 0,
    left: 0,
  },
  liveLayout: {
    height: 362,
    width: 369,
    position: "absolute",
  },
  staffPage1Child: {
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
    width: 110,
    height: 21,
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
  liveButton: {
    fontFamily: FontFamily.kadwaRegular,
    color: Color.colorCornflowerblue,
    height: 33,
    width: 131,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 0,
  },
  toggle: {
    top: 176,
    left: 32,
  },
  liveButtonChild: {
    top: 0,
    left: 0,
  },
  liveButtonItem: {
    top: 23,
    width: 318,
    height: 312,
  },
  liveButtonInner: {
    top: 35,
    left: 50,
    width: 275,
    height: 287,
    position: "absolute",
  },
  on: {
    top: 106,
    left: 117,
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.kanitRegular,
    color: Color.colorSteelblue_100,
    width: 160,
    height: 96,
    textAlign: "left",
    position: "absolute",
  },
  liveButton1: {
    top: 305,
    left: 10,
  },
  staffPage1: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default StaffPage1;
