import React, { Component } from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";

import styles from "../config/styles";

class SettingsScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.androidSafeView}
        source={require("../assets/gradientBackground.png")}
      >
        <Text style={styles.settingsLabel}> Settings </Text>
        <View style={styles.settingsElements}>
          <Text style={styles.comingSoonText}>Coming Soon!...Soon Enough!</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default SettingsScreen;
