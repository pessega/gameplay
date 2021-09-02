import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,

    borderRadius: 8,
    marginBottom: 12,
  },

  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  discrodImg: {
    width: 24,
    height: 18,
  },
  text: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: theme.fonts.text500,
  },
});

// export const ButtonContainer = styled.TouchableOpacity`
//   flex-direction: 'row',
//   align-items: 'center',

//   width: '100%',
//   height: 56,
//   background: theme.colors.primary,

//   border-radius: 8,
//   margin-bottom: 12,
// `;

// export const IconWrapper = styled.View`

// `,

// export const DiscordImg = styled.Image`
//   width: 24,
//   height: 18,
// `,

// export const Text = styled.Text`
//   flex: 1,
//   color: theme.colors.heading,
//   font-size: 15,
//   text-align: 'center',
// `;
