import React from "react";
import * as S from "./styles";
import { View } from "react-native";
import { Avatar } from "../Avatar";

export function Profile() {
  return (
    <S.ContainerProfile>
      <Avatar urlImage="https://github.com/pessega.png" />
      <View>
        <View>
          <S.ContainerRow>
            <S.Greeting>Olá,</S.Greeting>
            <S.Name>Andressa</S.Name>
          </S.ContainerRow>
        </View>
        <S.TextContent>Hoje é dia de vitória!</S.TextContent>
      </View>
    </S.ContainerProfile>
  );
}
