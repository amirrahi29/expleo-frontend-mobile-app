import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../Constants/ColorConstants";

export const SignUpCss = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    logo: {
      width: '100%',
      height: 100,
      marginBottom: 20,
    },
    title: {
      color:ColorConstants.blackColor,
      fontSize: 28,
      fontWeight: 'bold'
    },
    icon: {
      width: 20,
      height: 20,
    },
  });