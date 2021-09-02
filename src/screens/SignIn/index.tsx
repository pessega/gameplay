import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";
import { Bakcground } from "../../components/Background";
import { RectButton } from "react-native-gesture-handler";
import { AuthContext, useAuth } from "../../hooks/auth";

export function SignIn() {
  const navigation = useNavigation();

  const { user } = useAuth();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Bakcground>
      <View style={styles.containerSignin}>
        <Image
          style={styles.image}
          source={IllustrationImg}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize suas jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon onPress={handleSignIn} text="Entrar no discord" />
          <RectButton onPress={handleSignIn}>
            <Text>testeg</Text>
          </RectButton>
        </View>
      </View>
    </Bakcground>
  );
}
