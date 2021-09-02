import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { colors, fonts } = theme;

export const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: 1,
    backgroundColor: colors.secondary40,
    marginBottom: 21,
    marginTop: 2,
    alignSelf: "flex-end",
  },
});
