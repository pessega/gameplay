import React from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export function SmallIput({ ...rest }: TextInputProps) {
  return (
    <TextInput style={styles.container} {...rest} keyboardType="numeric" />
  );
}
