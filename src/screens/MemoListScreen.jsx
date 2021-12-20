import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Hello from '../components/Hello';
import MyAdmob from '../components/MyAdmob';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>アイウエオ</Text>
        <Hello />
        <MyAdmob />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
