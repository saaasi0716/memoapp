import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Hello from '../components/Hello';
import MyAdmob from '../components/MyAdmob';

export default function MemoDetalScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>買い物リスト</Text>
        <Text>12月</Text>
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
