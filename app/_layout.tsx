import {SplashScreen, Stack} from "expo-router";
import '@/global.css';
import {useFonts} from 'expo-font';
import {useEffect} from "react";

export default function RootLayout() {
  const [fontsLoaded]=useFonts({
    'sans-regular':require('../assets/fonts/PlusJakarta-Regular.ttf'),
    'sans-bold': require('../assets/fonts/PlusJakarta-Bold.ttf'),
    'sans-medium': require('../assets/fonts/PlusJakarta-Medium.ttf'),
    'sans-semibold': require('../assets/fonts/PlusJakarta-SemiBold.ttf'),
    'sans-extrabold': require('../assets/fonts/PlusJakarta-ExtraBold.ttf'),
    'sans-light': require('../assets/fonts/PlusJakarta-Light.ttf')
  })

  // To check whether the fonts have loaded
  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if(!fontsLoaded) return null;
  return <Stack>
    <Stack.Screen name="(tabs)"/>
  </Stack>;
}
