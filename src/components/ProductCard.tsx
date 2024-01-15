import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';
import HeartIcon from '../../assets/images/heart.svg';
import {navigate} from '../utils/navigationUtils';
import MinusIcon from '../../assets/images/minus.svg';
import PlusIcon from '../../assets/images/plus.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCartData,
} from '../redux/slices/cartSlice';

const ProductCard = ({allProducts}) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartData);
  console.log('first', items);

  const isAddedToCart = productId => items.some(item => item.id === productId);

  const handleAddToCart = product => {
    dispatch(addToCart({item: product}));
  };

  const handleIncreaseQuantity = productId => {
    dispatch(increaseQuantity({id: productId}));
  };

  const handleDecreaseQuantity = productId => {
    dispatch(decreaseQuantity({id: productId}));
  };

  return (
    <View style={styles.container}>
      {allProducts?.map(product => (
        <View style={styles.productCard} key={product.id}>
          <TouchableOpacity
            onPress={() => navigate('ProductScreen', {productId: product.id})}>
            <Image
              source={{uri: product.thumbnail}}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={[styles.productPriceText, {marginTop: 5}]}>
                  ${product.price}
                </Text>
                <Text style={styles.productTitleText}>{product.title}</Text>
              </View>
            </View>
            {isAddedToCart(product.id) ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  onPress={() => handleDecreaseQuantity(product.id)}
                  style={styles.circle}>
                  <MinusIcon height={20} width={20} />
                </TouchableOpacity>
                <Text style={styles.text}>
                  {items.find(item => item.id === product.id)?.quantity || 0}
                </Text>
                <TouchableOpacity
                  onPress={() => handleIncreaseQuantity(product.id)}
                  style={styles.circle}>
                  <PlusIcon height={20} width={20} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{marginTop: 5, alignSelf: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => handleAddToCart(product)}
                  style={styles.circle}>
                  <PlusIcon height={20} width={20} />
                </TouchableOpacity>
              </View>
            )}
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
    marginTop: 12,
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
    height: 100,
    width: '100%',
    borderRadius: 12,
  },
  productPriceText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
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
  circle: {
    height: 20,
    width: 20,
    backgroundColor: colors.primaryBackground,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    color: colors.secondaryText,
  },
});
