import { useState } from "react"
import { StyleSheet, Text, View, Pressable, Image } from "react-native"
import { Product } from "../components/Product"

export default function App(props) {
  let [products, setProducts] = useState([
    { name: "گوشی", price: "120,000", photoSource: "/images/1.jpeg", count: 1 },
    {
      name: "گوشی دوم",
      price: "240,000",
      photoSource: "/images/2.jpeg",
      count: 1,
    },
  ])

  return (
    <View
      style={{
        height: "100vh",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Image
        source={{ uri: "/images/3.jpeg" }}
        resizeMode="repeat"
        style={{ width: "100%", height: 120 }}
      />
      سبد خرید
      {products.map((product, index) => (
        <Product
          name={product.name}
          price={product.price}
          photoSource={product.photoSource}
          count={product.count}
          onDeletePress={() => {
            setProducts([
              ...products.slice(0, index),
              ...products.slice(index + 1),
            ])
          }}
          onAddPress={() => {
            setProducts([
              ...products.slice(0, index),

              {
                ...products[index],
                count: products[index].count + 1,
              },

              ...products.slice(index + 1),
            ])
          }}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {},
  menuBox: {},
})
