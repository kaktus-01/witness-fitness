import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

export default function BetaScreen() {
  return (
    <ImageBackground
      style={{
        width: 500,
        height: 820,
        alignSelf: "center",
      }}
      source={require("../assets/Matrix.gif")}
    >
      <Text
        style={{
          fontSize: 48,
          color: "white",
          fontFamily: "monospace",
          alignSelf: "center",
          top: 400,
        }}
      >
        {" "}
        Coming Soon...{" "}
      </Text>
    </ImageBackground>
  );
}
