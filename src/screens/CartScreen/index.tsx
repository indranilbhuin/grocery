import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import {colors} from '../../../assets/colors';
import ProductList from '../../components/ProductList';
import {useSelector} from 'react-redux';
import {selectCartData, selectCartTotal} from '../../redux/slices/cartSlice';
import Lottie from 'lottie-react-native';

const CartScreen = () => {
  const items = useSelector(selectCartData);
  const totalPrice = useSelector(selectCartTotal);
  const deliveryFee = 35.96;

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />

      <HeaderContainer
        title={`Shopping Cart (${items?.length})`}
        showCartButton={false}
        quantity={undefined}
      />
      {items.length !== 0 ? (
        <>
          <ProductList cartItems={items} />
          <View style={styles.bottomContainer}>
            <TouchableOpacity>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkoutContainer}>
            <View style={{marginTop: 10}}>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Subtotal</Text>
                <Text
                  style={[styles.totalText, {fontFamily: 'Manrope-Medium'}]}>
                  $ {totalPrice}
                </Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Delivery</Text>
                <Text
                  style={[styles.totalText, {fontFamily: 'Manrope-Medium'}]}>
                  $ {deliveryFee}
                </Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text
                  style={[styles.totalText, {fontFamily: 'Manrope-Medium'}]}>
                  $ {totalPrice + deliveryFee}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Proceed To checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center', height: '80%'}}>
          <Lottie
            style={styles.lottieImage}
            source={require('../../../assets/jsons/noCart.json')}
            autoPlay
          />
          <Text style={styles.productNotFoundText}>It feels empty here</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: '100%',
  },
  listContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: 30,
  },
  editText: {
    alignSelf: 'flex-end',
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: colors.navyBlue,
  },
  bottomContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  checkoutContainer: {
    width: '95%',
    height: 250,
    backgroundColor: colors.primaryText,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: 17,
    justifyContent: 'space-between',
  },
  totalText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: colors.black02,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14.5,
    paddingHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: colors.navyBlue,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 14,
    color: colors.white,
  },
  lottieImage: {
    height: 200,
    width: 200,
  },
  productNotFoundText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    color: colors.charcoalBlack,
  },
});
