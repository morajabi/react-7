import { Pressable, View, Text, StyleSheet, Image, Button } from "react-native"

export function Product({
  children,
  name,
  price,
  photoSource,
  count,
  onDeletePress,
  onAddPress,
}) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: photoSource, width: 60, height: 60 }}
        style={{ borderRadius: 15 }}
      />

      <View style={styles.texts}>
        <Text>{name}</Text>
        <Text>قیمت: {price}</Text>
        <Text>تعداد: {count}</Text>
        <Button title="حذف" color="red" onPress={onDeletePress} />
        <Button title="افزودن" color="blue" onPress={onAddPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: "lightblue",
    marginBottom: 15,
    flexDirection: "row",
    borderRadius: 15,
  },

  texts: {
    marginRight: 15,
  },
})
