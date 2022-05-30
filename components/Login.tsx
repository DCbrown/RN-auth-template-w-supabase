import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, Text, TextInput, View, Pressable } from 'react-native';
import { Formik } from 'formik';

function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
           <Formik
              initialValues={{ email: '', password: '', }}
              onSubmit={values => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                  />
                   <TextInput
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                  <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Submit</Text>
                  </Pressable>
                </View>
              )}
          </Formik>
          <Button
            onPress={() => navigation.navigate("Sign Up")}
            title="Sign Up"
            color="#841584"
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});



export default Login