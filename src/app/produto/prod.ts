import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerProd: {
        flex: 1
    },
    headerProd: {
        padding: 16
    },
    imageProd: {
        width: "100%",
        height: 300,
        marginTop: 40,
        borderRadius: 8
    },
    productTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10
    },
    productPrice: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10
    },
    aboutContainer: {
        paddingTop: 5,
        padding: 16
    },
    ingredientsContainer: {
        paddingTop: 5,
        padding: 16
    },
    descriptionTitle: {
        fontWeight: "bold"
    },
    descriptionText: {
        color: "#667"
    },
    ingredientTitle: {
        fontWeight: "bold",
        marginBottom: 5
    },
    productText: {
        color: "#667"
    },
    addCartContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    addCartBtn: {
        backgroundColor: "#0B864D",
        color: "white",
        paddingRight: 60,
        paddingLeft: 60,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        marginTop: 40
    }

})