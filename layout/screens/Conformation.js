import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Conformation = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.conformation}
      locations={[0, 0.61]}
      colors={["#d9ebff", "#e1f4cb"]}
    >
      <View style={styles.conformationChild} />
      <Text style={styles.enterTheCode}>Enter the code :</Text>
      <TextInput style={styles.conformationItem} />
      <Text style={[styles.areYouSure, styles.no1Typo]}>{`Are  you sure you want
to pay via credits ?`}</Text>
      <Pressable
        style={[styles.yes, styles.noLayout]}
        onPress={() => navigation.navigate("FinalTimer")}
      >
        <View style={[styles.button, styles.no1Position]} />
        <Text style={[styles.yes1, styles.no1Position]}>yes</Text>
      </Pressable>
      <Pressable
        style={[styles.no, styles.noLayout]}
        onPress={() => navigation.navigate("Map1")}
      >
        <View style={[styles.button, styles.no1Position]} />
        <Text style={[styles.no1, styles.no1Position]}>no</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  no1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  noLayout: {
    height: 50,
    width: 126,
  },
  no1Position: {
    top: 0,
    position: "absolute",
  },
  conformationChild: {
    top: 134,
    left: 32,
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorLavender,
    borderStyle: "solid",
    borderColor: "#2a82c2",
    borderWidth: 5,
    width: 325,
    height: 470,
    position: "absolute",
  },
  enterTheCode: {
    top: 456,
    left: 72,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.blackHanSansRegular,
    textAlign: "left",
    width: 246,
    height: 29,
    color: Color.colorWhite,
    position: "absolute",
  },
  conformationItem: {
    top: 496,
    left: 65,
    backgroundColor: Color.colorWhite,
    width: 263,
    height: 54,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  areYouSure: {
    top: 175,
    left: 50,
    width: 289,
    height: 154,
    position: "absolute",
  },
  button: {
    left: 0,
    backgroundColor: Color.colorLightskyblue,
    height: 50,
    width: 126,
    borderRadius: Border.br_16xl,
  },
  yes1: {
    left: 40,
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  yes: {
    left: 57,
    top: 363,
    width: 126,
    position: "absolute",
  },
  no1: {
    left: 45,
    textAlign: "center",
    fontFamily: FontFamily.lalezarRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  no: {
    left: 202,
    top: 363,
    width: 126,
    position: "absolute",
  },
  conformation: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Conformation;
