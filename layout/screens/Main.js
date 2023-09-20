import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const Main = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.main}
      onPress={() => navigation.navigate("StudentLogin")}
    >
      <Image
        style={[styles.panda41, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/panda-4-1.png")}
      />
      <Text style={styles.vBus}>V-Bus</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/2-1.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/3-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 500,
    width: 500,
    left: 0,
    position: "absolute",
  },
  panda41: {
    top: 144,
  },
  vBus: {
    top: 458,
    left: 110,
    fontSize: 64,
    fontFamily: FontFamily.lalezarRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 224,
    height: 58,
    position: "absolute",
  },
  icon: {
    top: 344,
  },
  icon1: {
    top: 0,
    width: 390,
    height: 490,
    left: 0,
    position: "absolute",
  },
  main: {
    backgroundColor: Color.colorLavender,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Main;
