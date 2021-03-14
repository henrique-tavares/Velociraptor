import React from "react";
import { useFonts } from "expo-font";
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { StatusBar } from "react-native";

import Routes from "./src/routes";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="#303922" barStyle="light-content" />
      <Routes />
    </>
  );
}
