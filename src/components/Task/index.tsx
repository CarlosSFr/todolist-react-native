import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { defaultTheme } from "../../styles/default";
import { useState } from "react";

interface TaskProps {
    text: string,
    onDelete: (taskToDelete: string) => void,
    onChecked: (taskChecked: boolean) => void,
}

export function Task({ text, onDelete, onChecked }: TaskProps){

    const [ checked, setChecked ] = useState(false)

    function handleRemoveTask(){
        onDelete(text)
    }

    function handleCheckCircle(){
        setChecked(!checked)
        onChecked(!checked)
    }

    return (
        <View style={styles.taskContainer} >
            <View>
                <TouchableOpacity onPress={handleCheckCircle} >
                    {checked ? <CheckCircle color={defaultTheme["purple-dark"]} size={24} weight="fill" /> : <Circle color={defaultTheme.blue} size={24} /> }
                </TouchableOpacity>
            </View>
            <Text style={checked? styles.taskTextChecked : styles.taskText} >{text}</Text>
            <TouchableOpacity onPress={handleRemoveTask} >
                <Trash color={defaultTheme["gray-300"]} size={24} />
            </TouchableOpacity>
            
        </View>
    )
}