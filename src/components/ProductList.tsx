import {Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, UIManager, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {colors} from '../../assets/colors';
import MinusIcon from '../../assets/images/minus.svg';
import PlusIcon from '../../assets/images/plus.svg';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../redux/slices/cartSlice';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const ProductList = ({cartItems}) => {
  const dispatch = useDispatch();
  const [visibleItems, setVisibleItems] = useState(cartItems);

  useEffect(() => {
    setVisibleItems(cartItems);
  }, [cartItems]);

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({ id: productId }));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setVisibleItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  return (
    <View style={{paddingLeft: '5%', paddingRight: '5%', marginTop: 30}}>
      {visibleItems?.map(item => (
        <View key={item.id}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: item.thumbnail,
                }}
                style={styles.listImage}
              />
              <View>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={[styles.text, {fontFamily: 'Manrope-Regular'}]}>
                  $ {item.price}
                </Text>
              </View>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={[styles.iconContainer, {marginRight: 11}]}
                onPress={() => handleDecreaseQuantity(item.id)}>
                <MinusIcon height={20} width={20} />
              </TouchableOpacity>
              <Text style={[styles.text, {marginRight: 11}]}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleIncreaseQuantity(item.id)}>
                <PlusIcon height={20} width={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.hr} />
        </View>
      ))}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  listImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 10,
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
    alignItems: 'center',
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
  hr: {
    backgroundColor: '#EBEBFB',
    height: 0.5,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
});
