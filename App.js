import React, {useState, useEffect} from  'react';
import AppBar from './src/components/AppBar';
import {NavigationContainer} from "@react-navigation/native";
import {View } from 'react-native'




export default function App() {
  
  return (
      <View style={{flex:1, justifyContent:'center'}}>
        <AppBar/>
      </View>
  );
}

