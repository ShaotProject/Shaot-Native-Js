import React, { useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export const Start = () => {
  useEffect(()=>{},[])
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
