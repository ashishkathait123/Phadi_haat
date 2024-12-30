import { View, Text, ScrollView, StatusBar } from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router'
import HorizontalLineExample from "../../components/HorizontalLine";
import CustomButton from "../../components/CustomButton";

export default function SetupComplete() {
  return (
    <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <View className="w-full  min-h-[85vh] p-8 mt-20 ">
        <Text className=" font-psemibold text-center text-4xl mb-10 leading-snug">
         Your Set Up is {"\n"} Complete!🎉
        </Text>
        {/* <HorizontalLineExample containerStyles=""/> */}
        <View className="pl-3 ">
          <Text className=" font-psemibold text-gray-500 w-96 items-center text-center text-xl mb-8 ">
            Now, we will be creating a sample estimate for your reference. Same can be deleted Later.
          </Text>
          <CustomButton 
        title="Proceed"
        handlePress={() => {}}
        containerStyles=" w-full mt-7 bg-blue"
        textStyles="text-primary"
        />

<Link href="/businessInfo">u
</Link>
        </View>
      </View>
    </ScrollView>
    <StatusBar backgroundColor="#ccc" style="white" />
  </SafeAreaView>
  )
}

