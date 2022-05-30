import React from 'react';
import {  Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const RootStack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName='SignUp'>
            <RootStack.Screen name='Login' component={Login}/>
            <RootStack.Screen name='SignUp' component={SignUp} />
        </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
