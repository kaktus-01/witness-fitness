import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../config/styles";

const loginHandler = () => {
  console.log("Log In button clicked...");
};
const registerHandler = () => {
  console.log("Register button clicked...");
};

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/gradientBackground.png")}
      style={styles.backgroundGradient}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.nameText}>Witness Fitness! </Text>
        <Image
          style={styles.logo}
          source={require("../assets/womanIcon.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { component: "HomeScreen" })}
        style={styles.loginButton}
      >
        <View>
          <Text style={styles.loginText}> Log In </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.registerButton}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={registerHandler}
          style={styles.registerButton}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Register here.
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
