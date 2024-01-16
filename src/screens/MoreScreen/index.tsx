import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../assets/colors'

const MoreScreen = () => {
  return (
    <View
    style={{
      paddingLeft: '5%',
      paddingRight: '5%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={styles.productNotFoundText}>More</Text>
  </View>
  )
}

export default MoreScreen

const styles = StyleSheet.create({
  productNotFoundText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: colors.charcoalBlack,
  },
})