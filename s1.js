import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const IPhone141 = () => {
  return (
    <View style={styles.iphone141}>
      <Image
        style={[styles.panda41, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/panda-4-1.png")}
      />
      <Text style={styles.vBus}>V-Bus</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/2-1.png")}
      />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/3-1.png")}
      />
    </View>
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
  iphone141: {
    backgroundColor: Color.colorLavender,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone141;
