import { useState } from 'react';
import { View, Pressable, Image } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
	androidClientId:"1012812238419-1555d1j1qcklgs9l522gcikk56vknr78.apps.googleusercontent.com" ,
	scopes: ['profile', 'email'],
});

GoogleSignin.configure({
	webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
	scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
	offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
	hostedDomain: '', // specifies a hosted domain restriction
	forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
	accountName: '', // [Android] specifies an account name on the device that should be used
	iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
	googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
	openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
	profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

const GoogleLogin = async () => {
	await GoogleSignin.hasPlayServices();
	const userInfo = await GoogleSignin.signIn();
	return userInfo;
};

export default function GoogleButton() {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState('')

	const handleGoogleLogin = async () => {
		setLoading(true);
		try {
			const response = await GoogleLogin();
			const { idToken, user } = response;
			console.log(user);
			setUser(user)
			

		// 	if (idToken) {
		// 		const resp = await authAPI.validateToken({
		// 			token: idToken,
		// 			email: user.email,
		// 		});
		// 		await handlePostLoginData(resp.data);
		// 	}
		} catch (apiError) {
			setError(
				apiError?.response?.data?.error?.message || 'Something went wrong'
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={{margin:100}}>
			<Pressable onPress={handleGoogleLogin}><Text>Continue with Google</Text></Pressable>
			<Image style={{height:50, width:50}} resizeMode='cover' source={{uri:user?.photo}} />
			<Text>{user?.name}</Text>
		</View>
	);
}