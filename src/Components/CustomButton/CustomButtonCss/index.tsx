import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const CustomButtonCss = StyleSheet.create({
    CustomButton: {
        backgroundColor: ColorConstants.redColor,
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    CustomButtonText: {
        color: ColorConstants.whiteColor,
        fontSize: 16,
    },
});
