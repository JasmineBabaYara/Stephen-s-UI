import React from "react";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

//importing background image
import welcome from "../assets/images/welcome.jpg";

//importing styling
import styles from "../styles/welcomescreenstyle";

export default function Welcome() {
  return (
    <View style={styles.welcomecontainer}>
      <ImageBackground
        source={welcome}
        style={styles.welcomeimage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          locations={[0, 0.2]}
          style={styles.lineargradient}
        />
        <View style={styles.blurviewcontainer}>
          <BlurView tint="dark" intensity={40} style={styles.blurview}>
            <View style={styles.welcometext}>
              <Text style={styles.welcomeintro}>Enjoy best dishes in town</Text>
              <Text style={styles.welcomesecondintro}>
                Discover delicious {"\n"} and {"\n"} stunning recipes
              </Text>
            </View>
            <TouchableOpacity style={styles.login}>
              <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>
            <View style={styles.option}>
              <Text style={styles.optiontext1}>Don't have an account ?</Text>
              <Text style={styles.optiontext2}>Register</Text>
            </View>
          </BlurView>
        </View>
      </ImageBackground>
    </View>
  );
}
