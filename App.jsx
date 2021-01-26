import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Hello from './src/components/Hello';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Hello />
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



const firebaseConfig = {
  apiKey: 'AIzaSyCQ80I2QwSqZ1xrlW2z5WVmUPrTZO_n8Qg',
  authDomain: 'kakeiboapp-270db.firebaseapp.com',
  projectId: 'kakeiboapp-270db',
  storageBucket: 'kakeiboapp-270db.appspot.com',
  messagingSenderId: '872455420062',
  appId: '1:872455420062:web:32a953d541139e3607638f',
  measurementId: 'G-VJWC08Q94M'
};
if (firebase.app.lemgth === 0) {
 firebase.initializeApp(firebaseConfig)
}







