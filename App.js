import React from "react";

import TabNavigator from "./src/config/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/config/StackNavigator";

import { BottomNavigation } from "react-native-paper";

class Home extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  }
}

export default Home;
