import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../config/styles";

class WaterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onIncrement = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/gradientBackground.png")}
        style={styles.backgroundGradientWater}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.nameText}>Hydrate ! </Text>
          <Image
            style={styles.waterBottle}
            source={require("../assets/WaterBottle.png")}
          />
        </View>
        <View style={styles.waterCounterContainer}>
          <Text style={styles.waterCounter}>{this.state.count} / 10</Text>
          <Text style={styles.PS}>
            (You can keep going after you hit 2 litres, but don't drink too
            much!)
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.onIncrement}
          style={styles.counterContainer}
        >
          <View>
            <Text style={styles.counterText}>+1 cup</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.amounts}> (200 milillitres) </Text>
      </ImageBackground>
    );
  }
}

export default WaterScreen;
