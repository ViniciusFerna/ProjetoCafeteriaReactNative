import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginContainer: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    emailContainer: {
        marginTop: 200,
    },
    emailInput: {
        width: 250,
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#0B864D",
        padding: 2,
        marginTop: 5
    },
    senhaContainer: {
        marginTop: 50
    },
    senhaInput: {
        width: 250,
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#0B864D",
        padding: 2,
        marginTop: 5
    },
    sendBtn: {
        backgroundColor: "#0B864D",
        color: "white",
        paddingRight: 60,
        paddingLeft: 60,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        marginTop: 40
    },
    cadastroBtn: {
        marginTop: 20
    }
})