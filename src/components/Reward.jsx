import { AdMobRewarded } from 'expo-ads-admob';
import React, { useEffect, useState } from 'react';
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';

export default function Reward() {

  const [reward, setReward] = useState(0);

  useEffect(() => {
    // リワードの初期化（テスト用ID）
    const testUnitID = Platform.select({
      // https://developers.google.com/admob/ios/test-ads
      ios: 'ca-app-pub-3940256099942544/1712485313',
      // https://developers.google.com/admob/android/test-ads
      android: 'ca-app-pub-3940256099942544/5224354917',
    });

    // 実際に広告配信する際のID
    // 広告ユニットを作成した際に表示されたものを設定する
    const adUnitID = Platform.select({
      ios: 'ca-app-pub-3940256099942544/1712485313',
      android: 'ca-app-pub-3940256099942544/5224354917',
    });

    if (testUnitID) {
      AdMobRewarded.setAdUnitID(testUnitID);
    }

    // 動画を全て見終えた場合のイベント
    AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward',
      (rewardResult) => {
        console.log('rewardedVideoUserDidEarnReward')
        console.log(rewardResult)
        // 広告を全て見終えたので報酬を与える
        setReward(reward + rewardResult.amount)
      })

    AdMobRewarded.addEventListener('rewardedVideoDidFailToPresent', () => console.log('rewardedVideoDidFailToPresent'))
    AdMobRewarded.addEventListener('rewardedVideoDidDismiss', () => console.log('rewardedVideoDidDismiss'))
    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => console.log('rewardedVideoDidFailToLoad'))
    AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => console.log('rewardedVideoDidLoad'))
    AdMobRewarded.addEventListener('rewardedVideoDidPresent', () => console.log('rewardedVideoDidPresent'))

    // ライフサイクルが終わるときにはイベントを開放する
    return () => AdMobRewarded.removeAllListeners()
  }, [])

  const viewReward = async () => {

    // 広告の要求
    await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true });

    // 広告の表示
    await AdMobRewarded.showAdAsync();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>リワードテスト</Text>
        <StatusBar style="auto" />

        <View style={{ backgroundColor: 'blue', margin: 32, borderRadius: 10 }}>
          <Button title='リワード表示テスト' color='white' onPress={viewReward} />
        </View>
        <View style={{ margin: 32, borderRadius: 10 }}>
          <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>Reward Count : {reward}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


