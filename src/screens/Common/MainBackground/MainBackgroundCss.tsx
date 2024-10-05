import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../Constants/ColorConstants";

export const MainBackgroundCss = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: ColorConstants.whiteColor,
        justifyContent: 'center',
        padding: 20,
    },
});