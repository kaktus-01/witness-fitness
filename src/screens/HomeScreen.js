import React, { Component, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "../config/styles";

function HomeScreen() {
  const [exercises, setExercises] = useState([
    {
      exercise: (source = { uri: "https://s7.gifyu.com/images/crunch.gif" }),
      exerciseDesription: "This is a crunch. It is good for abs. Stay healthy!",
      key: "1",
    },
    {
      exercise: (source = { uri: "https://s7.gifyu.com/images/crunch.gif" }),
      exerciseDesription: "This is a sit up.",
      key: "2",
    },
    {
      exercise: (source = { uri: "https://s7.gifyu.com/images/crunch.gif" }),
      exerciseDesription: "This is a up up.",
      key: "3",
    },
    {
      exercise: (source = { uri: "https://s7.gifyu.com/images/crunch.gif" }),
      exerciseDesription: "This is a burp e up.",
      key: "4",
    },
    {
      exercise: (source = { uri: "https://s7.gifyu.com/images/crunch.gif" }),
      exerciseDesription: "This is a squat up.",
      key: "5",
    },
  ]);

  return (
    <ImageBackground
      style={styles.androidSafeView}
      source={require("../assets/gradientBackground.png")}
    >
      <ScrollView>
        {exercises.map((item) => {
          return (
            <View style={{ padding: 5 }} key={item.key}>
              <View style={styles.exercisesContainer}>
                <Image style={styles.gif} source={item.exercise} />
                <Text style={styles.exerciseDesriptionText}>
                  {item.exerciseDesription}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}

export default HomeScreen;
