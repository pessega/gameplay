import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";

import DiscordImg from "../../assets/discord.png";

interface ButtonProps extends RectButtonProps {
  text: string;
}

export function ButtonIcon({ text, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.buttonContainer} activeOpacity={0.8}>
      <View style={styles.iconWrapper}>
        <Image style={styles.discrodImg} source={DiscordImg} />
      </View>

      <Text style={styles.text}>{text}</Text>
    </RectButton>
  );
}
