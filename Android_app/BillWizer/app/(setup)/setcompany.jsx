import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "expo-router";

const router = useRouter();

const Setcompany = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  min-h-[85vh] p-8 mt-20 ">
          <Text className=" font-psemibold text-center text-4xl mb-10 leading-snug">
            Set Up {"\n"} Business Profile
          </Text>
          <View className="pl-3 ">
            <Text className=" font-pregular mb-8 text-xl">
              Get closer to instant and easy invoice management in simple steps.
            </Text>
            <Text className=" font-pregular text-xl">
              Information will be used for your Estimate & Invoice Generation &
              can be edited later in settings.
            </Text>

            <CustomButton
              title="Continue"
              handlePress={() => {
                router.navigate("/businessInfo")
              }}
              containerStyles="w-full mt-16 h-16 bg-blue"
              textStyles="text-primary"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#ccc" style="white" />
    </SafeAreaView>
  );
};

export default Setcompany;
