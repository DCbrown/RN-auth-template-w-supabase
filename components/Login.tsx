import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <Text>Login</Text>
          <Button
          onPress={() => navigation.navigate("SignUp")}
          title="Go to Signup"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login