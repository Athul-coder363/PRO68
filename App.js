import React from "react"; 
import { StyleSheet, Text, View,Image } from "react-native"; 
import { createAppContainer } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs";
import Fb from "./screen/fb";
import In from "./screen/in";

export default class App extends React.Component { 
  render() {
     return( 
     <AppContainer />
     );
  }} 

const TabNavigator = createBottomTabNavigator({ 
    Fb: { screen: Fb },
     In: { screen: In }, },)
const AppContainer = createAppContainer(TabNavigator)