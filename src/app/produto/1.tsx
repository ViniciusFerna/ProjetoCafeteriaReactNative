import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./prod"

export default function Produto() {
    return (
        <View style={styles.containerProd}>
            <View style={styles.headerProd}>
                <Image style={styles.imageProd} source={require("@/assets/images/espressoCurto.jpeg")}></Image>
                <Text style={styles.productTitle}>Espresso Curto</Text>
                <Text style={styles.productPrice}>R$ 6.00</Text>
            </View>
            <View style={styles.aboutContainer}>
                <Text style={styles.descriptionTitle}>Sobre</Text>
                <Text style={styles.productText}>intenso e concentrado, com 20-25 ml de água, sabor robusto e crema espessa. Perfeito para quem gosta de um café forte e marcante.</Text>
            </View>
            <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientTitle}>Ingredientes</Text>
                <Text style={styles.descriptionText}>- 7g de café</Text>
                <Text style={styles.descriptionText}>- 45ml de água</Text>
            </View>
            <View style={styles.addCartContainer}>
                <TouchableOpacity>
                    <Text style={styles.addCartBtn}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}