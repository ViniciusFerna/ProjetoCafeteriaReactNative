import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export default function CadastrarScreen() {

    /* const [date, setDate] = useState(new Date()) */

    function handleLogin() {
            router.replace("/home/page")
        }


    return(
        <View style={styles.cadastroContainer}>
            <View style={styles.nomeContainer}>
                <Text>Digite o seu nome</Text>
                <TextInput style={styles.nomeInput} placeholder="Seu nome"/>
            </View>
            <View style={styles.emailContainer}>
                <Text>Digite o seu e-mail</Text>
                <TextInput style={styles.emailInput} placeholder="Seu e-mail"/>
            </View>
            <View style={styles.senhaContainer}>
                <Text>Digite o a sua senha</Text>
                <TextInput style={styles.senhaInput} placeholder="Sua senha"/>
            </View>
            <View style={styles.senha2Container}>
                <Text>Reescreva a sua senha</Text>
                <TextInput style={styles.senha2Input} placeholder="Sua senha"/>
            </View>
            <View style={styles.cpfContainer}>
                <Text>Digite o seu CPF</Text>
                <TextInput style={styles.cpfInput} placeholder="Seu CPF"/>
            </View>
            <View style={styles.dataContainer}>
                <Text>Selecione sua data de nascimento</Text>
                <TextInput style={styles.dataInput} placeholder="dd/MM/aaaa"></TextInput>
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.sendBtn}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}