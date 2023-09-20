import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone143 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone143}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/2-1.png")}
      />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/3-1.png")}
      />
      <Text style={[styles.signIn, styles.signInLayout]}>Sign In</Text>
      <Text style={[styles.username, styles.usernameTypo]}>Username:</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password:</Text>
      <TextInput style={[styles.iphone143Child, styles.iphone143Layout]} />
      <TextInput style={[styles.iphone143Item, styles.iphone143Layout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Pressable style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.button1, styles.buttonLayout]} />
        <Text style={styles.signUp}>Sign In</Text>
      </Pressable>
      <TouchableOpacity
        style={[styles.student, styles.iconLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone142")}
      >
        <View style={[styles.studentChild, styles.childBorder]} />
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/5-1.png")}
        />
        <Text style={[styles.student1, styles.staffTypo]}>Student</Text>
      </TouchableOpacity>
      <Pressable style={styles.driver}>
        <View style={[styles.driverChild, styles.childBorder]} />
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/4-1.png")}
        />
        <Text style={[styles.staff, styles.staffTypo]}>Staff</Text>
        <Image
          style={styles.icon4}
          resizeMode="cover"
          source={require("../assets/6-1.png")}
        />
      </Pressable>
      <Text style={[styles.chooseAccountStaff, styles.signInLayout]}>
        Choose account: Staff
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signInLayout: {
    height: 65,
    width: 280,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.blackHanSansRegular,
    position: "absolute",
  },
  usernameTypo: {
    height: 29,
    left: 18,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.blackHanSansRegular,
    position: "absolute",
  },
  iphone143Layout: {
    height: 33,
    width: 310,
    backgroundColor: Color.colorWhite,
    left: 33,
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "12.56%",
    right: "83.33%",
    width: "4.1%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonLayout: {
    height: 56,
    width: 160,
    position: "absolute",
  },
  iconLayout: {
    height: 187,
    width: 234,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 6,
    borderColor: Color.colorLightskyblue,
    borderStyle: "solid",
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  staffTypo: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.kanitRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    top: 344,
    width: 500,
    height: 500,
    left: 0,
    position: "absolute",
  },
  icon1: {
    width: 390,
    height: 490,
    top: 0,
    left: 0,
    position: "absolute",
  },
  signIn: {
    top: 135,
    left: 89,
    fontSize: FontSize.size_29xl,
  },
  username: {
    top: 408,
    width: 142,
  },
  password: {
    top: 521,
    width: 139,
  },
  iphone143Child: {
    top: 446,
  },
  iphone143Item: {
    top: 561,
  },
  vectorIcon: {
    height: "1.18%",
    top: "54.27%",
    bottom: "44.55%",
  },
  vectorIcon1: {
    height: "2.01%",
    top: "67.65%",
    bottom: "30.33%",
  },
  button1: {
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_16xl,
    height: 56,
    width: 160,
    top: 0,
    left: 0,
  },
  signUp: {
    top: 13,
    left: 34,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.blackHanSansRegular,
    position: "absolute",
  },
  button: {
    top: 638,
    left: 101,
  },
  studentChild: {
    top: 31,
    left: 53,
    width: 127,
    height: 156,
  },
  icon2: {
    left: 16,
    top: 0,
  },
  student1: {
    top: 145,
    left: 87,
  },
  student: {
    left: -16,
    top: 197,
    height: 187,
  },
  driverChild: {
    top: 36,
    left: 52,
    width: 126,
    height: 151,
  },
  icon3: {
    top: 0,
    left: 0,
  },
  staff: {
    top: 147,
    left: 99,
  },
  icon4: {
    top: 125,
    left: 117,
    width: 107,
    height: 93,
    position: "absolute",
  },
  driver: {
    left: 156,
    height: 218,
    width: 234,
    top: 197,
    position: "absolute",
  },
  chooseAccountStaff: {
    top: 200,
    left: 78,
    fontSize: FontSize.size_xl,
  },
  iphone143: {
    backgroundColor: Color.colorLavender,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone143;
