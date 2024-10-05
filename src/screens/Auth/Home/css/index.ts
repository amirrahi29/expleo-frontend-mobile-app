import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../Constants/ColorConstants";

export const HomeCss = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColorConstants.whiteColor,
    },
    userItem: {
      marginVertical: 5,
      borderWidth: 1,
      borderColor: ColorConstants.placeholderColor,
      borderRadius: 5,
      justifyContent: 'space-between', 
      padding:16
    },
    userDetails: {
      flex: 1, 
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 120, 
    },
    editButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    deleteButton: {
      flexDirection: 'row',
      alignItems: 'center',
    }
  });
  