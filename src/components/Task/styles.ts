import { StyleSheet } from "react-native";
import { defaultFont, defaultTheme } from "../../styles/default";

export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: defaultTheme["gray-500"],
        gap: 8,
        width: "100%",
        alignItems: "center",
        paddingTop: 12,
        paddingLeft: 12,
        paddingBottom: 12,
        paddingRight: 8,
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: defaultTheme["gray-400"],
        marginBottom: 8,
    },
    taskText: {
        fontFamily: defaultFont.fonts.text,
        fontSize: 14,
        color: defaultTheme["gray-100"],
        width: "80%",
    }
})