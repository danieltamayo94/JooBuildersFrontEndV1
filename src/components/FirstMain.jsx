import React from 'react'
import {Text , View} from 'react-native'
import Category from './Category'
import AppBar from './AppBar'
import {Route, Switch, Redirect} from 'react-router-native'

const FirstMain = () => {
  return (
    <View style={{flexGrow:1}}>
        <AppBar/>
        <Category/>    
    </View>
  )
}

export default FirstMain