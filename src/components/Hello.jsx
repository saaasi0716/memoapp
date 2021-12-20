import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export default function Hello(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <View>
      <Text style={styles.text}>
        {`Greatfuldays! ${children}`}
      </Text>
    </View>
  );
}

Hello.prpoypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
