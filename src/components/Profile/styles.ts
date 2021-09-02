import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const ContainerProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 24px;
  color: ${theme.colors.heading};
  margin-right: 6px;
`;

export const Name = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 24px;
  color: ${theme.colors.heading};
`;

export const TextContent = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
`;
