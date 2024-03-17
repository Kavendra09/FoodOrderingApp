import { StyleSheet, Image, Text, View,Pressable} from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";
import { Link } from "expo-router";

const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItems = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.slug}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}> ${product.price} </Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItems ; defaultImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "White",
    padding: 10,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
});
