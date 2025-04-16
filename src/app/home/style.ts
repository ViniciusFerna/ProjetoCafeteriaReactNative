import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 16
    },
    headerImage: {
        width: "100%",
        height: 200,
        marginTop: 40,
        borderRadius: 8
    },
    restauranteName: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 20,
        color: "#0B864D"
    },
    subtitle: {
        color: "#667",
        marginTop: 4
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        gap: 16 
    },
    tabText: {
        color: "#667"
    },
    menuList: {
        flex: 1,
        padding: 16
    },
    menuItem: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 4
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8
    }


})