import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { defaultTheme } from "../../styles/default";
import { ClipboardText, PlusCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { ChangeEvent, useState } from "react";

export function Home(){

    const [ tasks, setTasks ] = useState<string[]>([]);
    const [ textTask, setTextTask ] = useState('')
    const [ isChecked, setIsChecked ] = useState(0)

    function handleAddNewTask(){

        setTasks(state => [...tasks, textTask]);

        setTextTask('');

    }

    function handleRemoveTask(taskToDelete: string){
        Alert.alert("Remover", "Deseja remover a tarefa?", 
        [
            {
                text: "sim",
                onPress: () => {
                    const tasksWithoutDeleted = tasks.filter(task => {
                        return task !== taskToDelete;
                    })
            
                    setTasks(tasksWithoutDeleted);
                }
            },
            {
                text: "não",
                style: "cancel"
            }
        ]
        )
    }

    function handleCheckedTask(tasksChecked: boolean){
        if(tasksChecked){
            setIsChecked(state =>  state + 1)
        }else{
            setIsChecked(state => state - 1)
        }
    }

    return (
        <>
        <Header/>
        <View style={styles.main} >
            <View style={styles.tasksContainer} >
            <View style={styles.inputDiv} >
                <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={defaultTheme["gray-300"]}
                onChangeText={e => setTextTask(e)}
                value={textTask}
                />
                <TouchableOpacity style={styles.inputButton} onPress={handleAddNewTask} >
                    <Text><PlusCircle color={defaultTheme.white} size={16} /></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer} >
                <View style={styles.textContainer} >
                    <Text style={styles.textOne} >Criadas</Text>
                    <View style={styles.circleValue} >
                        <Text style={styles.circleText} >{tasks.length}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTwo} >Concluídas</Text>
                    <View style={styles.circleValue} >
                        <Text style={styles.circleText} >{isChecked}</Text>
                    </View>
                </View>
            </View>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Task 
                            key={item}
                            text={item}
                            onDelete={handleRemoveTask}
                            onChecked={handleCheckedTask}
                        />
                    )}
                ListEmptyComponent={() => (
                    <>
                    <View style={styles.todoContainer} >
                        <ClipboardText color={defaultTheme["gray-400"]} size={56} />
                        <View style={styles.noTodoText} >
                        <Text style={styles.noTodoTextOne}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.noTodoTextTwo}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    </View>
                    </>
                )}
                />
            </View>
        </View>
            
        </>
    )
}