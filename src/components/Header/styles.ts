import { StyleSheet } from "react-native";
import { defaultFont, defaultTheme } from "../../styles/default";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: defaultTheme["gray-700"],
        height: 173,
        gap: 12,
    },
    logoHeader: {
        height: 40,
        width: 45,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textOne: {
        color: defaultTheme.blue,
        fontSize: 40,
        fontFamily: defaultFont.fonts.titleTwo,
    },
    textTwo: {
        color: defaultTheme["purple-dark"],
        fontSize: 40,
        fontFamily: defaultFont.fonts.titleTwo,
    }

})