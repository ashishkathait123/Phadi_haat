import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {  SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'react-native'
import FormField from '@/components/FormField'
import OrLineComponent from '@/components/OrLineComponent'
import { Link, useRouter } from 'expo-router'




const Signup = () => {

  const router = useRouter();

  const handlePress = () =>{
    router.navigate("/(auth)/login")
  }


  const [form, setForm] = useState({
    email:''
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%"}}>
        <View className='w-full  min-h-[85vh] p-8 mt-10 '>
        <Text className="w-full text-center font-pmedium text-3xl">
          Welcome to <Text className="text-blue-500 font-pmedium">B</Text>ill <Text className="text-blue-500 font-pmedium">W</Text>izer!
        </Text>
        <View className='w-full px-4   items-center'>
          <Text className="mt-16 font-pbold   text-3xl">
            Create Account
          </Text>
        </View>
        <FormField 
          value={form.email}
          handleChangeText={(e) => setForm({...form, email:e})}
          otherStyles="mt-7 "
          placeholder="Email"
        />
        <CustomButton 
        title="Create Account"
        handlePress={handlePress}
        containerStyles="w-full mt-7 bg-blue"
        textStyles="text-primary"
        />
        <OrLineComponent />

        <CustomButton 
        title="Sign up with Google"
        handlePress={() => {}}
        containerStyles="w-full mt-7 border bg-white"
        textStyles="text-black "
        />
      
        <View className='w-full justify-center items-center mt-2'>
          <Text className='text-center color-black font-psemibold'>30 Days Free Trail</Text>
          <Text className='text-center font-pregular'>No Credit Card Required</Text>
        </View>
        <View className='w-full justify-center items-center mt-6'>
          <Text className='text-center color-black font-pregular'>Already have an Account?</Text>
          <Link href={"/(auth)/login"} className='color-blue-600 font-pmedium'>Tap here to Sign In</Link>
        </View>
        <View className='w-full justify-center items-center mt-6 '>
          <Text className='text-center color-black font-pregular'>By creating an account, you agree to our</Text>
         <View className='flex flex-row mt-2'>
         <Link href={"/(tabs)/reports"} className='color-blue-600 font-pmedium mr-2'>Terms of use </Link> 
         <Text className="text-3xl leading-10 -mt-2 font-plight">|</Text>
         <Link href={"/(tabs)/invoices"} className='color-blue-600 font-pmedium ml-3'>Privacy policy</Link>
        
         </View>
         </View>
        </View>
      
      </ScrollView>
      <StatusBar backgroundColor="#808080" style="light" />
    </SafeAreaView>
  )
}

export default Signup