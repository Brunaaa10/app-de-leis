import React from "react"
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, TouchableOpacity} from 'react-native';
import Home from "./Screens/Home"
import HelpScreen from "./Screens/HelpScreen"
import {NavigationContainer} from "@react-navigation/native"
import TabNavigator from "./Navigation/TabNavigator"
import StackNavigator from "./Navigation/StackNavigator"

export default class App extends React.Component{
   render(){
    return(
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer> 
    )
  }
}