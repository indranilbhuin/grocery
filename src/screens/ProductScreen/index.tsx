import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ProductScreen = () => {
  const route = useRoute();
  const {productId} = route.params;
  console.log(productId)
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})