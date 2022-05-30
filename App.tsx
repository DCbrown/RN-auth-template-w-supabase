import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
          <RootStack.Screen name='Login' component={Login}/>
          <RootStack.Screen name='SignUp' component={SignUp} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
