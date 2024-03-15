import { FlatList } from "react-native";
import ProductListItems from "@components/ProductListItems";
import products from "@assets/data/products";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItems product={item} />}
      numColumns={2}
      contentContainerStyle={{gap : 10}}
      columnWrapperStyle= {{gap : 10}}
    />
  );
}
