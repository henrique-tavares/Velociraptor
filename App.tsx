import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="#303922" barStyle='light-content' />
      <Routes />
    </>
  );
}
