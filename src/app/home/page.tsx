import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "./style"
import { Link } from 'expo-router'

export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "Espresso Curto",
            description: "Intenso e concentrado, com 20-25 ml de água, sabor robusto e crema. . .",
            price: 6.00,
            image: require("@/assets/images/espressoCurto.jpeg")
        },
        {
            id: 2,
            name: "Espresso Longo",
            description: "Mais suave e diluído, com 40-50 ml de água, mantendo o sabor. . .",
            price: 7.50,
            image: require("@/assets/images/espressoLongo.webp")
        },
        {
            id: 3,
            name: "Latte clássico",
            description: "Combinação suave de espresso e leite vaporizado, com uma camada generosa de. . .",
            price: 12.00,
            image: require("@/assets/images/latte.webp")
        },
        {
            id: 4,
            name: "Cappuccino clássico",
            description: "Clássico e cremoso, feito com partes iguais de espresso, leite vaporizado . . .",
            price: 15.00,
            image: require("@/assets/images/cappuccino.jpg")
        },
        {
            id: 5,
            name: "Mocha clássico",
            description: "Uma delícia indulgente que combina espresso, leite vaporizado, chocolate e uma . . .",
            price: 16.00,
            image: require("@/assets/images/mocha.jpg")
        },
        {
            id: 6,
            name: "Machiatto clássico",
            description: "Espresso 'manchado' com uma leve dose de leite vaporizado ou espuma. . .",
            price: 16.00,
            image: require("@/assets/images/machiatto.jpg")
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/fachada.jpg")}></Image>
                <Text style={styles.restauranteName}>Cafeteria Barro</Text>
                <Text style={styles.subtitle}>O melhor café de São Paulo</Text>
            </View>

            <View style={styles.tabs}>
                {["Espresso", "Latte", "Machiatto", "Cappuccino", "Mocha"].map((tab) => (
                    <TouchableOpacity>
                        <Text style={styles.tabText}>{tab}</Text>
                    </TouchableOpacity>
                ))}

            </View>

            <ScrollView style={styles.menuList}>

                {
                    MENU.map((item) => (
                        <Link href={"/produto/1"} asChild>
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                            <Image style={styles.itemImage} source={item.image} />
                        </TouchableOpacity>
                        </Link>
                    ))
                }

            </ScrollView>
        </View>
    )
}

