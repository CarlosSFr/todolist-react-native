import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { defaultTheme } from "../../styles/default";

interface TaskProps {
    text: string,
}

export function Task({ text }: TaskProps){
    return (
        <View style={styles.taskContainer} >
            {/* <CheckCircle /> */}
            <View>
                <Circle color={defaultTheme.blue} size={24} />
            </View>
            <Text style={styles.taskText} >{text}</Text>
            <Trash color={defaultTheme["gray-300"]} size={24} />
        </View>
    )
}