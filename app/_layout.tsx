import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

// Vai impedir a tela de ficar escondida enquanto carrega todas as fontes.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require('../assets/fonts/RobotoMono-Regular.ttf'),
  });

  useEffect(()=>{
    if(error){
      throw error;
    }else if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded,error])

  if(!fontsLoaded){
    return null;
  }
  if(!fontsLoaded && !error){
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen   
        name="meditate/[id]" 
        options={{ headerShown: false }} />
    </Stack>
  );
}
