import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, Text, TextInput, View, Pressable } from 'react-native';
import { Formik } from 'formik';
import { supabase } from '../superbase-service';

function SignUp() {
    const navigation = useNavigation();

    const handleSubmit = async (email: string, password: string) => {

      const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        console.log('Error:', error);
      }

      if (session) {
        console.log('Session:', session);
        navigation.navigate("Logged In");
      }

      if (user) {
        console.log('User:', user);
        navigation.navigate("Login"); 
      }
    } 


    return (
        <View style={styles.container}>
          <Formik
              initialValues={{ username: '', email: '', password: '', passwordAgain: '' }}
              onSubmit={values => handleSubmit(values.email, values.password)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    placeholder="Username"
                  />
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
                   <TextInput
                    style={styles.input}
                    onChangeText={handleChange('passwordAgain')}
                    onBlur={handleBlur('passwordAgain')}
                    value={values.passwordAgain}
                    secureTextEntry={true}
                    placeholder="Password Again"
                  />
                  <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Submit</Text>
                  </Pressable>
                </View>
              )}
          </Formik>    
          <Button
            onPress={() => navigation.navigate("Login")}
            title="Go to Login"
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

export default SignUp