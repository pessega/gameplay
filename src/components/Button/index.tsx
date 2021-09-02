import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends RectButtonProps {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.buttonContainer} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </RectButton>
  );
}
