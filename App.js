import React from "react";

import TabNavigator from "./src/config/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/config/StackNavigator";

import LoginScreen from "./src/screens/LoginScreen";

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
