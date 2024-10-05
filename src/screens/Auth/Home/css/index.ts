import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../Constants/ColorConstants";

export const HomeCss = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColorConstants.whiteColor,
    },
    userItem: {
      padding: 15,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: ColorConstants.placeholderColor,
      borderRadius: 5,
    },
  });