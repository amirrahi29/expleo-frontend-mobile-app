import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const CustomCheckBoxCss = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    CustomCheckBox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: ColorConstants.placeholderColor,
        borderRadius: 4,
        marginRight: 10,
    },
    checked: {
        backgroundColor: ColorConstants.checkedColor,
    },
    label: {
        fontSize: 16,
        color:ColorConstants.grayColor
    },
});