import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
 <>
 <Stack screenOptions={{headerShown:false}}>
 <Stack.Screen
    name="log-in"
    options={{
      headerShown: false
    }}
/>
 <Stack.Screen
    name="sign-up"
    options={{
      headerShown: false
    }}
/>
 </Stack>

 <StatusBar backgroundColor="#808080" style="light" />
 </>
  )
}

export default AuthLayout