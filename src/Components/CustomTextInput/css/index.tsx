import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const CustomTextInputCss = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      marginBottom: 5,
      color: ColorConstants.blackColor,
      fontSize: 14,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: ColorConstants.placeholderColor,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      height: 40,
      paddingLeft: 10,
      color: ColorConstants.blackColor,
    },
    icon: {
      width: 20,
      height: 20,
      marginHorizontal: 5,
    },
  });
  