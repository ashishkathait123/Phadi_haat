import {  Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {  SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'react-native'
import FormField from '@/components/FormField'
import OrLineComponent from '@/components/OrLineComponent'
import { Link } from 'expo-router'
import GoogleButton from '../../components/GoogleButton'

const Login = () => {

   const [form, setForm] = useState({
      email:''
    })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%"}}>
        <View className='w-full  min-h-[85vh] p-8 mt-20 '>
        <Text className="w-full text-center font-pmedium text-3xl">
          Welcome to <Text className="text-blue-500 font-pmedium">B</Text>ill <Text className="text-blue-500 font-pmedium">W</Text>izer!
        </Text>
        <View className='w-full px-4   items-center'>
          <Text className="mt-16 font-pbold text-4xl">
           Sign In
          </Text>
        </View>
        <FormField 
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          otherStyles="mt-7 "
          placeholder="Email"
        />
        <CustomButton 
        title="Create Account"
        handlePress={() => {}}
        containerStyles=" w-full mt-7 bg-blue"
        textStyles="text-primary"
        />
        <OrLineComponent />

        <CustomButton 
        title="Sign up with Google"
        handlePress={() => {}}
        containerStyles=" w-full mt-7 border bg-white"
        textStyles="text-black "
        />
        {/* <GoogleButton /> */}

         
      
        <View className='w-full justify-center items-center mt-6 flex-row'>
          <Text className='text-center color-black font-pregular'>Don't have an Account?</Text>
          <Link href={"/(auth)/signup"} className='color-black-600 font-psemibold ml-3'>Sign up</Link>
        </View>
        </View>
      
      </ScrollView>
      <StatusBar backgroundColor="#808080" style="light" />
    </SafeAreaView>
  )
}

export default Login;