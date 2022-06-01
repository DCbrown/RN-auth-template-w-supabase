import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../superbase-service';

function LoggedIn() {
  const navigation = useNavigation();

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    navigation.navigate("Login"); 
  }

  return (
    <View style={styles.container}>
      <Text>
          Welcome User!
      </Text>
      <Button
        onPress={() => handleLogOut()}
        title="Log Out"
        color="#841584"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoggedIn
