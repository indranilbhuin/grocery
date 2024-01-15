import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';
import HeartIcon from '../../assets/images/heart.svg';
import {navigate} from '../utils/navigationUtils';

const ProductCard = ({allProducts}) => {
  return (
    <View style={styles.container}>
      {allProducts?.map(product => (
        <View style={styles.productCard} key={product.id}>
          <TouchableOpacity
            onPress={() => navigate('ProductScreen', {productId: product.id})}>
            <Image source={{uri: product.thumbnail}} style={styles.cardImage} />
            <Text style={styles.productPriceText}>${product.price}</Text>
            <Text style={styles.productTitleText}>{product.title}</Text>
            <TouchableOpacity style={styles.heartIcon}>
              <HeartIcon height={13.55} width={14.55} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12
  },
  productCard: {
    height: 194,
    width: 160,
    backgroundColor: colors.primaryText,
    borderRadius: 12,
    marginBottom: 10,
    padding: 17,
    justifyContent: 'space-evenly',
  },
  cardImage: {
    height: 117,
    width: '100%',
    borderRadius: 12,
  },
  productPriceText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 14,
    color: colors.secondaryText,
  },
  productTitleText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: colors.black02,
  },
  heartIcon: {
    position: 'absolute',
    left: 13,
    top: 13,
    zIndex: 1,
  },
});
