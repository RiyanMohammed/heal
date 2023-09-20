import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const FinalTimer = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.finalTimer}
      locations={[0, 0.61]}
      colors={["#d9ebff", "#e1f4cb"]}
    >
      <Text style={[styles.yayYourPayment, styles.notePleaseTypo]}>{`Yay!
 Your payment has been successful`}</Text>
      <View style={[styles.finalTimerChild, styles.stopwatchIconLayout]} />
      <Text style={[styles.notePlease, styles.credClr]}>
        #Note : Please show this page to the driver before timer runs out
      </Text>
      <Image
        style={[styles.stopwatchIcon, styles.stopwatchIconLayout]}
        contentFit="cover"
        source={require("../assets/stopwatch.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Map1")}
      >
        <View style={[styles.button1, styles.buttonLayout]} />
        <Text style={[styles.cred, styles.credClr]}>Done</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  notePleaseTypo: {
    height: 154,
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
  },
  stopwatchIconLayout: {
    height: 744,
    width: 390,
    borderRadius: Border.br_27xl,
    left: 0,
    position: "absolute",
  },
  credClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  buttonLayout: {
    height: 72,
    width: 130,
    position: "absolute",
  },
  yayYourPayment: {
    top: 43,
    left: 50,
    fontSize: 40,
    color: Color.colorSteelblue_100,
    width: 289,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
  },
  finalTimerChild: {
    top: 297,
    backgroundColor: Color.colorAliceblue,
  },
  notePlease: {
    top: 316,
    left: 23,
    width: 344,
    height: 154,
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
  },
  stopwatchIcon: {
    top: 234,
  },
  button1: {
    top: 0,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    height: 72,
    width: 130,
  },
  cred: {
    top: 21,
    left: 30,
    fontFamily: FontFamily.blackHanSansRegular,
    textAlign: "left",
    width: 70,
  },
  button: {
    top: 726,
    left: 130,
  },
  finalTimer: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default FinalTimer;
