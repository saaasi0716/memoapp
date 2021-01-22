import React, { Component } from 'react';
import { Stylesheet, View, Text } from 'react-native';

class Bodytext extends React Component {
  render() {
    return (
      <View>
          <Text>yammy!</Text>
      </View>
    );
   }
}

const styles = Stylesheet.create({
  text: {
    color: '#DDD' ,
    backgroundColor: '#eee'
  },
});

export default Bodytext;
