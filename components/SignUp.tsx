import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

function SignUp() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <Text>Sign Up</Text>
          <Button
          onPress={() => navigation.navigate("Login")}
          title="Go to Login"
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

export default SignUp