import { theme } from "../../global/styles/theme";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerSignin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 360,
  },

  content: {
    marginTop: -50,
    paddingHorizontal: 50,
    justifyContent: "space-between",
  },

  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
    marginBottom: 16,
  },

  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
});

// export const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// export const Image = styled.Image`
//   width: 100%;
//   height: 360px;
// `;

// export const Content = styled.View`
//   margin-top: -50px;
//   padding: 0 50px;
//   justify-content: space-between;
// `;

// export const Title = styled.Text`
//   color: ${theme.colors.heading};
//   text-align: center;
//   font-size: 40px;
//   font-family: ${theme.fonts.title700};
//   line-height: 40px;
//   margin-bottom: 16px;
// `;

// export const Subtitle = styled.Text`
//   color: ${theme.colors.heading};
//   font-size: 15px;
//   text-align: center;
//   margin-bottom: 64px;
//   font-family: ${theme.fonts.title500};
//   line-height: 25px;
// `;
