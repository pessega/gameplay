import "react-native-gesture-handler";

import React from "react";
import { StatusBar, Text } from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";

import { Bakcground } from "./src/components/Background";

import { AppointmentCreate } from "./src/screens/AppointmentCreate";
import { Guilds } from "./src/screens/Guilds";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";
import { AuthContext, AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  // componente que segura a tela de splash enquanto não intalar as fontes
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Bakcground>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Bakcground>
  );
}
