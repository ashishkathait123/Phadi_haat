import {  View, Button, Image, Text, StatusBar } from 'react-native'
import * as React from "react";

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { Link } from 'expo-router'
// import  * as AuthSession from 'expo-auth-session';
// import  * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// WebBrowser.maybeCompleteAuthSession();

// export default function Index() {
//   const [ userInfo, setUserInfo ] = React.useState(null);

//   const [request, response, promptAsync ] = Google.useAuthRequest({
//       webClientId:"1012812238419-1555d1j1qcklgs9l522gcikk56vknr78.apps.googleusercontent.com",
//       androidClientId:"1012812238419-pkgv50ao918vl0p61c1ahtsun2j8fl5o.apps.googleusercontent.com",
//       redirectUri: 'https://auth.expo.io/BillWizer/BillWizer',
//       scopes: ["profile","email"],
// });

// React.useEffect(() => {
//   handleEffect();
// }, [response]);

// async function handleEffect() {
//   console.warn("token = " + response.authentication.accesssToken);
//   getUserInfo(response.authentication.accesssToken);

//   const user = await getLocalUser();
//   console.warn("AsyncStorage = " + response.authentication.accesssToken);
//   if(!user) {
//     getUserInfo(response.authentication.accesssToken);
//   } else {
//     setUserInfo(user);
//   }
// }

// const getLocalUser = async () => {
//   const data = await AsyncStorage.getItem("@user");
//   if(!data) return null;
//   return JSON.parse(data);
// };

// const getUserInfo = async (token) => {
//   if(!token) return;

//   try {
//     const response = await fetch(
//       "https//www.googleapis.com/userinfo/v2/me",
//       {
//         headers: {Authorization: `Bearer ${token}`},
//       }
//     );

//     const user = await response.json();
//     console.warm(user);
//     await AsyncStorage.setItem("@user", JSON.stringify(user));
//     setUserInfo(user);
//   }catch (error) {}
// }; 

  // return (
  // <View className='flex flex-col text-center justify-center items-center mt-80'>
  //   { !userInfo ? (
  //       <Button title='Login with Google'
  //       onPress={() =>{
  //         promptAsync();
  //       }} 
  //       />
  //   ) : (
  //     <View>
  //          <Image />
  //   <Text>Email:</Text>
  //   <Text>Full Name:</Text>
  //     </View>
  //   )}
  //   <Link href={"/(auth)/signup"}>GO to Signup</Link>
  // </View>
  // )

////////////////////////////////////////
React.useEffect(() => {
  GoogleSignin.configure({
    // webClientId: "1012812238419-1555d1j1qcklgs9l522gcikk56vknr78.apps.googleusercontent.com", 
    androidClientId:"1012812238419-pkgv50ao918vl0p61c1ahtsun2j8fl5o.apps.googleusercontent.com",
    // offlineAccess: true,
    // scopes: ["profile","email"],
  });
}, []);

const GoogleSingUp = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signIn().then(result => { 
      console.log(result); 
    });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      alert('User cancelled the login flow!');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Sign-in in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('Google Play services not available or outdated!');
    } else {
      console.error(error);
    }
  }
};

/////////////////////////////////
// React.useEffect(() => {
//   if (response?.type === 'success') {
//     const { authentication } = response;
//     console.log(authentication);
//   }
// }, [response]);
export default function Index() {
return (
  <View className='flex justify-center items-center text-center mt-64'>
  <Link href={"/(auth)/signup"}>GO to Signup</Link>
   <Link href={"/(setup)/setcompany"} className='m-4 border p-5'>CompanySetupLayout</Link>
  <Button
    title="Sign In with Google"
    onPress={GoogleSingUp}
  />
       <StatusBar backgroundColor="#808080" style="light" />
 
  </View>

);
}


