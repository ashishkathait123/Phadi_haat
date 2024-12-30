import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GoogleSignInButton = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await GoogleSignin.signIn();
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={handleSignIn} />
      {user && <Text>Welcome, {user.name}!</Text>}
    </View>
  );
};