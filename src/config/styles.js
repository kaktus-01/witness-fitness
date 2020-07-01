import { StyleSheet, Dimensions } from "react-native";

//import settings from "../screens/SettingsScreen";

const styles = StyleSheet.create({
  //For every element:
  androidSafeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  //From HomeScreen
  exercisesContainer: {
    flexDirection: "column",
    flex: 1,
    height: 500,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "dodgerblue",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    paddingTop: 28,
    flexShrink: 1,
  },
  gif: {
    height: 228,
    width: "85%",
    resizeMode: "contain",
  },
  exerciseDesriptionText: {
    color: "white",
    fontSize: 20,
    alignSelf: "flex-start",
    padding: 12,
  },
  //From BetaScreen
  betaBackground: {
    flex: 1,
  },
  warningLabel: {
    color: "red",
    fontFamily: "Roboto",
    fontSize: 60,
    alignSelf: "center",
  },
  betaTextContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "transparent",
  },
  betaText: {
    textAlign: "center",
    flex: 1,
    top: 10,
    fontFamily: "Roboto",
    fontSize: 22,
    color: "white",
    padding: 20,
  },
  //From SettingsScreen
  settingsLabel: {
    fontFamily: "Roboto",
    fontSize: 36,
    textAlign: "center",
    color: "white",
  },
  settingsElements: {
    flex: 1,
    justifyContent: "center",
  },
  comingSoonText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 24,
    textAlign: "center",
  },
  //From LoginScreen
  backgroundGradient: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  nameText: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#e8e8e8",
    fontSize: 50,
    fontFamily: "Roboto",
  },
  registerButton: {
    flexDirection: "row",
    height: 50,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    right: 3,
  },
  registerText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 14,
    left: 58,
  },
  loginButton: {
    flexDirection: "column",
    height: 50,
    width: "70%",
    backgroundColor: "#00f7ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  loginText: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: 22,
  },
  //For Timer
  /*   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  secondText: {
    fontSize: 40,
  }, */

  //For WaterScreen
  waterBottle: {
    width: 100,
    height: 300,
  },
  counterContainer: {
    backgroundColor: "#00f7ff",
    width: 130,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  counterText: {
    fontFamily: "Roboto",
    fontSize: 40,
    color: "white",
  },
  waterCounterContainer: {
    justifyContent: "center",
  },
  waterCounter: {
    color: "white",
    fontSize: 84,
    padding: 80,
    textAlign: "center",
  },
  amounts: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Roboto",
    padding: 6,
  },
  backgroundGradientWater: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  PS: {
    color: "white",
    bottom: 70,
    fontSize: 22,
    textAlign: "center",
  },
});

export default styles;
