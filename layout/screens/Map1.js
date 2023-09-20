import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.map}
      locations={[0, 0.32]}
      colors={["#d9ebff", "#e1f4cb"]}
    >
      <View style={[styles.mapChild, styles.mapPosition]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.profile, styles.creds5Typo]}>Profile</Text>
      <Text style={styles.nearestBus}>Nearest Bus:</Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("Conformation")}
      >
        <View style={[styles.button1, styles.buttonLayout]} />
        <Text style={[styles.cred, styles.credTypo]}>Pay with creds</Text>
      </Pressable>
      <Text style={[styles.creds5, styles.creds5Typo]}>Creds: 5</Text>
      <Text style={[styles.welcomeToVBus, styles.credTypo]}>
        Welcome to V-Bus !
      </Text>
      <View style={styles.mapItem} />
      <Image
        style={[styles.mapInner, styles.mapPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <View style={styles.dollarSign} />
      <Image
        style={styles.donateIcon}
        contentFit="cover"
        source={require("../assets/donate.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mapPosition: {
    borderRadius: Border.br_27xl,
    left: 0,
    position: "absolute",
  },
  creds5Typo: {
    height: 33,
    color: Color.colorWhite,
    fontFamily: FontFamily.kadwaBold,
    fontWeight: "700",
    top: 90,
    textAlign: "left",
    fontSize: FontSize.size_xl,
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
    color: Color.colorWhite,
    position: "absolute",
  },
  mapChild: {
    top: 160,
    backgroundColor: Color.colorAliceblue,
    width: 390,
    height: 744,
  },
  vectorIcon: {
    height: "3.55%",
    width: "7.69%",
    top: "11.14%",
    right: "84.36%",
    bottom: "85.31%",
    left: "7.95%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    left: 66,
    width: 90,
  },
  nearestBus: {
    top: 182,
    left: 25,
    fontFamily: FontFamily.kadwaRegular,
    color: Color.colorCornflowerblue,
    width: 161,
    height: 26,
    textAlign: "left",
    fontSize: FontSize.size_xl,
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
    fontSize: FontSize.size_5xl,
  },
  button: {
    top: 743,
    left: 56,
  },
  creds5: {
    left: 279,
    width: 110,
  },
  welcomeToVBus: {
    top: 40,
    left: 28,
    fontSize: FontSize.size_13xl,
    width: 355,
    height: 66,
  },
  mapItem: {
    top: 234,
    left: -24,
    backgroundColor: Color.colorWhite,
    width: 438,
    height: 450,
    position: "absolute",
  },
  mapInner: {
    top: 248,
    width: 724,
    height: 422,
  },
  dollarSign: {
    top: 478,
    left: -60,
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  donateIcon: {
    top: 94,
    left: 241,
    width: 32,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  map: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Map1;
