import React, { Component } from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import {
  mdiCalendarAlert,
  mdiHeartHalfFull,
  mdiBrush,
  mdiCommentQuoteOutline,
} from "@mdi/js";

import styles from "../config/styles";

export default function BetaScreen() {
  return (
    <ImageBackground
      style={styles.androidSafeView}
      source={require("../assets/gradientBackground.png")}
    >
      <Text style={styles.warningLabel}>WARNING!</Text>
      <View style={styles.betaTextContainer}>
        <Text style={styles.betaText}>
          This app was created in JUST 1 WEEK WITH NO EXPERIENCES WHATSOEVER! So
          the quality corresponds.
        </Text>
        <Icon name="perm-contact-calendar" color="grey" />
        <Text style={styles.betaText}>
          This app is not finished yet. Mike and I are working hard to bring you
          new features and optimizations as well as on-line stuff! Exciting.
        </Text>
        <Icon name="star-half" color="grey" />
        <Text style={styles.betaText}>
          All designs have a 99% chance that they'll be changed in the future,
          so don't get used to it.
        </Text>
        <Icon name="brush" color="grey" />
        <Text style={styles.betaText}>
          Help this app by giving constructive feedback to the creators!
        </Text>
        <Icon name="feedback" color="grey" />
      </View>
    </ImageBackground>
  );
}
