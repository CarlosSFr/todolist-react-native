import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { defaultTheme } from "../../styles/default";
import { ClipboardText, PlusCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";

export function Home(){
    // const tasks = ["Shrek is love", "Shrek is life", "mano o uqe escrever entao vou encher de linguiça aqui porra"];

    const [ tasks, setTasks ] = useState<string[]>([]);
    const [ textTask, setTextTask ] = useState('')

    function handleAddNewTask(){
       
        setTasks(state => [...state, textTask]);

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
                onChange={(e) => setTextTask}
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
                        <Text style={styles.circleText} >0</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTwo} >Concluídas</Text>
                    <View style={styles.circleValue} >
                        <Text style={styles.circleText} >0</Text>
                    </View>
                </View>
            </View>
                {/* <ClipboardText color={defaultTheme["gray-400"]} size={56} />
                <View style={styles.noTodoText} >
                    <Text style={styles.noTodoTextOne}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.noTodoTextTwo}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
                <Task />
                <Task />
                <Task />
                <Task /> */}
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Task 
                            key={item}
                            text={item}
                            // onRemove={() => handleParticipantRemove(item)}
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