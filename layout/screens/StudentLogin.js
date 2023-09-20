import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StudentLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.studentLogin}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/2-1.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/3-1.png")}
      />
      <Text style={[styles.signIn, styles.signInLayout]}>Sign In</Text>
      <Text style={[styles.username, styles.usernameTypo]}>Username:</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password:</Text>
      <TextInput style={[styles.studentLoginChild, styles.studentLayout]} />
      <TextInput style={[styles.studentLoginItem, styles.studentLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Map1")}
      >
        <Text style={styles.signUp}>Sign In</Text>
      </TouchableOpacity>
      <Pressable style={[styles.student, styles.driverPosition]}>
        <View style={[styles.studentChild, styles.childBorder]} />
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/5-1.png")}
        />
        <Text style={[styles.student1, styles.staffTypo]}>Student</Text>
        <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../assets/6-1.png")}
        />
      </Pressable>
      <TouchableOpacity
        style={[styles.driver, styles.driverPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("StaffLogin")}
      >
        <ImageBackground style={[styles.icon4, styles.iconFlexBox]}>
          <ImageBackground
            style={[styles.driverIcon, styles.iconFlexBox]}
            resizeMode="cover"
            source={require("../assets/4-1.png")}
          >
            <View style={styles.iconLayout}>
              <View style={[styles.driverChild, styles.childBorder]} />
              <Image
                style={[styles.icon5, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/4-1.png")}
              />
              <Text style={[styles.staff, styles.staffTypo]}>Staff</Text>
            </View>
          </ImageBackground>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={[styles.chooseAccountStudent, styles.signInLayout]}>
        Choose account: Student
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
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
  studentLayout: {
    height: 33,
    width: 310,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    left: 33,
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
  driverPosition: {
    top: 197,
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
  iconLayout: {
    height: 187,
    width: 234,
  },
  staffTypo: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.kanitRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iconFlexBox: {
    alignItems: "center",
    justifyContent: "center",
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
    left: 0,
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
  studentLoginChild: {
    top: 446,
  },
  studentLoginItem: {
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
  signUp: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.blackHanSansRegular,
  },
  button: {
    top: 638,
    left: 101,
    backgroundColor: Color.colorLightskyblue,
    width: 160,
    height: 56,
    paddingHorizontal: 34,
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: Border.br_16xl,
    position: "absolute",
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
    position: "absolute",
  },
  student1: {
    top: 145,
    left: 87,
  },
  icon3: {
    top: 123,
    left: 116,
    width: 107,
    height: 93,
    position: "absolute",
  },
  student: {
    left: -16,
    height: 216,
    width: 234,
  },
  driverChild: {
    top: 36,
    left: 52,
    width: 126,
    height: 151,
  },
  icon5: {
    top: 0,
    position: "absolute",
    left: 0,
  },
  staff: {
    top: 147,
    left: 99,
  },
  driverIcon: {
    width: 234,
  },
  icon4: {
    width: "100%",
    alignItems: "center",
  },
  driver: {
    left: 156,
    width: 234,
  },
  chooseAccountStudent: {
    top: 200,
    left: 61,
    fontSize: FontSize.size_xl,
  },
  studentLogin: {
    backgroundColor: Color.colorLavender,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default StudentLogin;
