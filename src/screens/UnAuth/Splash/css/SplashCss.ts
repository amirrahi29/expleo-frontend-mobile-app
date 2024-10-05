import { StyleSheet } from "react-native";
import { ColorConstants } from "../../../../Constants/ColorConstants";

export const SplashCss = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorConstants.whiteColor,
    },
    logo: {
        marginBottom: 20,
    },
});