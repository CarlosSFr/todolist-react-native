import { StyleSheet } from "react-native";
import { defaultFont, defaultTheme } from "../../styles/default";

export const styles = StyleSheet.create({
    headerContainer: {
        width: "86.6%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 14,
    },
    main: {
        backgroundColor: defaultTheme["gray-600"], 
        height: "100%",
    }
}) 