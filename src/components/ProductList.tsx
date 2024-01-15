import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';
import MinusIcon from '../../assets/images/minus.svg';
import PlusIcon from '../../assets/images/plus.svg';

const ProductList = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://cdn.dummyjson.com/product-images/29/4.webp'}}
          style={styles.listImage}
        />
        <View>
          <Text style={styles.text}>Bananas</Text>
          <Text style={[styles.text, {fontFamily: 'Manrope-Regular'}]}>
            7.90
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={[styles.iconContainer, {marginRight: 11}]}>
          <MinusIcon height={20} width={20} />
        </TouchableOpacity>
        <Text style={[styles.text, {marginRight: 11}]}>1</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <PlusIcon height={20} width={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  listImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 10
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: colors.secondaryText,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: colors.primaryText,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
