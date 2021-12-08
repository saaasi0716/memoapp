import React from "react";
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, } from 'react-native';


function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon2Row}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.匿名家計簿sns}>匿名家計簿SNS</Text>
        <EntypoIcon name="circle-with-plus" style={styles.icon}></EntypoIcon>
      </View>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 141.51 145.7" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={71}
            cy={73}
            rx={71}
            ry={73}
          ></Ellipse>
        </Svg>
        <View style={styles.名前Column}>
          <Text style={styles.名前}>名前</Text>
          <Text style={styles.年齢住所}>
            年齢{"\n"}
            {"\n"}住所
          </Text>
        </View>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}></View>
        <View style={styles.rect3}></View>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
      </View>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}></View>
        <View style={styles.group}>
          <UntitledComponent
            style={styles.untitledComponent}
          ></UntitledComponent>
        </View>
      </View>
      <View style={styles.rect6Row}>
        <View style={styles.rect6}>
          <Text style={styles.支出}>支出</Text>
        </View>
        <View style={styles.rect7}>
          <Text style={styles.収入}>収入</Text>
        </View>
      </View>
      <View style={styles.icon4Row}>
        <EntypoIcon name="calendar" style={styles.icon4}></EntypoIcon>
        <EntypoIcon name="calculator" style={styles.icon7}></EntypoIcon>
        <EntypoIcon name="camera" style={styles.icon3}></EntypoIcon>
        <EntypoIcon name="chat" style={styles.icon5}></EntypoIcon>
        <FontAwesomeIcon
          name="map-marker"
          style={styles.icon6}
        ></FontAwesomeIcon>
      </View>
    </View>
  );
}

export default Untitled;
