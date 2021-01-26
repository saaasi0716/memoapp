import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Hello() {
  return (
    <View>
      <Text style={styles.text}>Greatfuldays!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
