import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Header(){
    return (
        <View style={styles.header} >
            <Image source={require("../../assets/logoHeader.png")} style={styles.logoHeader} />
            <View style={styles.textContainer} >
                <Text style={styles.textOne} >to</Text>
                <Text style={styles.textTwo} >do</Text>
            </View>
        </View>
    )
}