import { AdMobInterstitial } from 'expo-ads-admob';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native';
import MyAdmob from './src/components/MyAdmob';
import Hello from './src/components/Hello';
import AppBar from './src/components/AppBar';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  useEffect(() => {
    // インタースティシャルの初期化（テスト用ID）
    const testUnitID = Platform.select({
      // https://developers.google.com/admob/ios/test-ads
      ios: 'ca-app-pub-3940256099942544/4411468910',
      // https://developers.google.com/admob/android/test-ads
      android: 'ca-app-pub-3940256099942544/1033173712',
    });

    // 実際に広告配信する際のID
    // 広告ユニットを作成した際に表示されたものを設定する
    const adUnitID = Platform.select({
      ios: 'ca-app-pub-1274192629170329/1451572457',
      android: 'ca-app-pub-1274192629170329/2189939057 ',
    });

    if (adUnitID) {
      AdMobInterstitial.setAdUnitID(adUnitID);
    }
  }, [])

  const viewInterstatial = useCallback(async () => {

    // 広告の要求
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });

    // 広告の表示
    await AdMobInterstitial.showAdAsync();
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 10 }}>インタースティシャルテスト</Text>
        <StatusBar style="auto" />
        <View><TextInput>
          ここに予定を入力！
          　　　　　　<AntDesign name="pluscircleo" size={32} color="black" />



          保存する場合は下の青ボタンをプッシュ！
          </TextInput></View>
          <View><Hello>
          </Hello>

          </View>
        <View style={{ backgroundColor: 'blue', margin: 32, borderRadius: 10 }}>
          <Button title='インタースティシャル表示テスト' color='white' onPress={viewInterstatial} />
        </View>
        <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 10 }}>バナーテスト</Text>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='banner'</Text>
        <MyAdmob
          bannerSize='banner'
        />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='fullBanner'</Text>
        <MyAdmob
          bannerSize='fullBanner'
        />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='largeBanner'</Text>
        <MyAdmob
          bannerSize='largeBanner'
        />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='leaderboard'</Text>
        <MyAdmob
          bannerSize='leaderboard'
        />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='mediumRectangle'</Text>
        <MyAdmob
          bannerSize='mediumRectangle'
        />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='smartBannerLandscape'</Text>
        <MyAdmob
          bannerSize='smartBannerLandscape'
        />
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>bannerSize='smartBannerPortrait'</Text>
        <MyAdmob
          bannerSize='smartBannerPortrait'
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
