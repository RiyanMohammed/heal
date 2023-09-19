import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const IPhone144 = () => {
  return (
    <LinearGradient
      style={styles.iphone144}
      locations={[0, 0.4]}
      colors={["#d9ebff", "#79beff"]}
      useAngle={true}
      angle={180}
    >
      <View style={[styles.iphone144Child, styles.iphone144Position]} />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.activity, styles.creds5Typo]}>Activity</Text>
      <Text style={styles.nearestBus}>Nearest Bus:</Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.button1, styles.buttonLayout]} />
        <Text style={[styles.cred, styles.credTypo]}>Pay with creds</Text>
      </View>
      <Text style={[styles.creds5, styles.creds5Typo]}>Creds: 5</Text>
      <Text style={[styles.welcomeToVBus, styles.credTypo]}>
        Welcome to V-Bus !
      </Text>
      <View style={styles.iphone144Item} />
      <Image
        style={[styles.iphone144Inner, styles.iphone144Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iphone144Position: {
    borderRadius: Border.br_27xl,
    left: 0,
    position: "absolute",
  },
  creds5Typo: {
    height: 33,
    width: 110,
    fontFamily: FontFamily.kadwaBold,
    fontWeight: "700",
    top: 90,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  buttonLayout: {
    height: 56,
    width: 259,
    position: "absolute",
  },
  credTypo: {
    fontFamily: FontFamily.blackHanSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  iphone144Child: {
    top: 160,
    backgroundColor: Color.colorLavender,
    width: 390,
    height: 744,
  },
  vectorIcon: {
    height: "5.09%",
    width: "10.77%",
    top: "10.66%",
    right: "83.59%",
    bottom: "84.24%",
    left: "5.64%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  activity: {
    left: 73,
  },
  nearestBus: {
    top: 182,
    left: 25,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.kadwaRegular,
    color: "#3aa0ff",
    width: 161,
    height: 26,
    textAlign: "left",
    position: "absolute",
  },
  button1: {
    top: 0,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    height: 56,
    width: 259,
  },
  cred: {
    top: 13,
    left: 32,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.blackHanSansRegular,
  },
  button: {
    top: 743,
    left: 56,
  },
  creds5: {
    left: 257,
  },
  welcomeToVBus: {
    top: 40,
    left: 28,
    fontSize: FontSize.size_13xl,
    color: Color.colorSteelblue,
    width: 355,
    height: 66,
  },
  iphone144Item: {
    top: 234,
    left: -24,
    backgroundColor: Color.colorWhite,
    width: 438,
    height: 450,
    position: "absolute",
  },
  iphone144Inner: {
    top: 248,
    width: 724,
    height: 422,
  },
  iphone144: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default IPhone144;
