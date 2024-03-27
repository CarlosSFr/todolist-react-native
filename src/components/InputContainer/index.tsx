import { Text, View } from "react-native";
import { styles } from "./styles";


export function InputContainer(){
    return (
        <>
        <View style={styles.main} >
            <View style={styles.headerContainer} >
                <View>
                   <Text>Criadas</Text>
                   <Text>0</Text>
                </View>
                <View>
                    <Text>Concluídas</Text>
                    <Text>0</Text>
                </View>
            </View>
        </View>
        </>
    )
}