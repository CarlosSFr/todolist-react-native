import { StyleSheet } from "react-native";
import { defaultFont, defaultTheme } from "../../styles/default";

export const styles = StyleSheet.create({
    input: {
        height: 54,
        backgroundColor: defaultTheme["gray-500"],
        borderRadius: 6,
        padding: 16,
        width: 310,
        fontSize: 16,
        color: defaultTheme["gray-100"],
    },
    inputDiv: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        marginTop: -26,
        paddingLeft: 24,
        paddingRight: 24,
    },
    inputButton: {
        backgroundColor: defaultTheme["blue-dark"],
        width: 54,
        height: 54,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 14,
        paddingBottom: 20,
        marginTop: 32,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: defaultTheme["gray-400"],
    },
    main: {
        backgroundColor: defaultTheme["gray-600"], 
        height: "100%",
        alignItems: "center"
    },
    tasksContainer: {
        width: "86.6%"
    },
    textContainer: {
        flexDirection: "row",
        gap: 8,
    },
    textOne: {
        color: defaultTheme.blue,
        fontFamily: defaultFont.fonts.title,
        fontSize: 14,
    },
    textTwo: {
        color: defaultTheme.purple,
        fontFamily: defaultFont.fonts.title,
        fontSize: 14,
    },
    circleValue: {
        backgroundColor: defaultTheme["gray-400"],
        width: 25,
        height: 19,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
    },
    circleText: {
        color: defaultTheme["gray-200"],
        fontFamily: defaultFont.fonts.title,
        fontSize: 12,
    },
    todoContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 48,
        gap: 16,
    },
    todoContainerTask: {
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
    },
    noTodoText: {
    },
    noTodoTextOne: {
        color: defaultTheme["gray-300"],
        fontFamily: defaultFont.fonts.title,
        fontSize: 14,
    },
    noTodoTextTwo: {
        color: defaultTheme["gray-300"],
        fontFamily: defaultFont.fonts.text,
        fontSize: 14,
    }

})