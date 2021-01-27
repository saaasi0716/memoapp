import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Svg, { Ellipse } from "react-native-svg";
import UntitledComponent from "../components/UntitledComponent";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 2
  },
  匿名家計簿sns: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 83,
    marginTop: 13
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 84
  },
  icon2Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 74,
    marginLeft: 18,
    marginRight: 13
  },
  ellipse: {
    width: 142,
    height: 146
  },
  名前: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  年齢住所: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 46
  },
  名前Column: {
    width: 28,
    marginLeft: 36,
    marginTop: 21
  },
  ellipseRow: {
    height: 146,
    flexDirection: "row",
    marginTop: 102,
    marginLeft: 23,
    marginRight: 146
  },
  rect2: {
    top: 7,
    left: 29,
    width: 375,
    height: 86,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect3: {
    top: 92,
    left: 29,
    width: 375,
    height: 86,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 456,
    height: 100,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 100,
    width: 456
  },
  rect2Stack: {
    width: 456,
    height: 178,
    marginTop: 9,
    marginLeft: -27
  },
  rect4: {
    top: 0,
    left: 0,
    width: 375,
    height: 86,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  group: {
    top: 85,
    left: 0,
    width: 375,
    height: 86,
    position: "absolute"
  },
  untitledComponent: {
    height: 86,
    width: 375
  },
  rect4Stack: {
    width: 375,
    height: 171
  },
  rect6: {
    width: 188,
    height: 77,
    backgroundColor: "#E6E6E6"
  },
  支出: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 27,
    marginLeft: 80
  },
  rect7: {
    width: 190,
    height: 77,
    backgroundColor: "#E6E6E6"
  },
  収入: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 26,
    marginLeft: 72
  },
  rect6Row: {
    height: 77,
    flexDirection: "row",
    marginTop: -596,
    marginRight: -3
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 30,
    marginTop: 3
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 36
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 37,
    marginTop: 3
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 38,
    marginTop: 6
  },
  icon4Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 529,
    marginLeft: 29,
    marginRight: 22
  }
});

export default Untitled;
