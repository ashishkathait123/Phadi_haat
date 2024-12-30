import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function CompanySetupLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="setcompany" />
      <Stack.Screen name="businessInfo" />
      <Stack.Screen name="setupComplete" />
      {/* <Stack.Screen name="google" /> */}
      <Stack.Screen name="selector" />
      <Stack.Screen name="country" />
    </Stack>
  );
}
