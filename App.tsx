import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LoggedIn from './components/LoggedIn';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
          <RootStack.Screen name='Login' component={Login}/>
          <RootStack.Screen name='Sign Up' component={SignUp} />
          <RootStack.Screen name='Logged In' component={LoggedIn} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
