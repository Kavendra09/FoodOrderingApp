import { ScrollView, View } from "react-native";
import ProductListItems from "@components/ProductListItems";
import products from "@assets/data/products";

export default function MenuScreen() {
  return (
    <View>
      <ScrollView>
        <ProductListItems product={products[0]} />
        <ProductListItems product={products[1]} />
      </ScrollView>
    </View>
  );
}
