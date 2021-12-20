import { AdMobBanner } from "expo-ads-admob";
import React from "react";
import { Platform } from "react-native";

export default function MyAdmob() {

    // テスト用のID
    // 実機テスト時に誤ってタップしたりすると、広告の配信停止をされたりするため、テスト時はこちらを設定する
    const testUnitID = Platform.select({
        // https://developers.google.com/admob/ios/test-ads
        ios: 'ca-app-pub-3940256099942544/2934735716',
        // https://developers.google.com/admob/android/test-ads
        android: 'ca-app-pub-3940256099942544/6300978111',
    });

    // 実際に広告配信する際のID
    // 広告ユニット（バナー）を作成した際に表示されたものを設定する
    const adUnitID = Platform.select({
        ios: 'ca-app-pub-3940256099942544/2934735716',
        android: 'ca-app-pub-3940256099942544/6300978111',
    });

    return (
        <AdMobBanner
            bannerSize="fullBanner"
            adUnitID={adUnitID}
            servePersonalizedAds // パーソナライズされた広告の可否。App Tracking Transparencyの対応時に使用。
        />
    )
}
