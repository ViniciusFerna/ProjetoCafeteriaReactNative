import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"

export default function LoginScreen() {
    function handleLogin() {
        router.replace("/home/page")
    }

    return(
        <View style={styles.loginContainer}>
            <View style={styles.emailContainer}>
                <Text>E-mail</Text>
                <TextInput style={styles.emailInput} placeholder="Seu email"/>
            </View>
            <View style={styles.senhaContainer}>
                <Text>Senha</Text>
                <TextInput style={styles.senhaInput} placeholder="Sua senha"/>
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.sendBtn}>Entrar</Text>
            </TouchableOpacity>
            <Link style={styles.cadastroBtn} href={"/cadastrar/page"}>Crie uma conta</Link>
        </View>
    )
}