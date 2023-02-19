import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage,setFetchedMessage] = useState('');
  const {token} = useContext(AuthContext);
  useEffect(()=>{
    const getMsg = async()=>{
      const response = await axios.get(`https://react-native-project-61d0c-default-rtdb.firebaseio.com/message.json?auth=${token}`);
      setFetchedMessage(response.data);
    }
    getMsg();
  },[])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
