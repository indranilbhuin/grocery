import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BagIcon from '../../assets/images/bag.svg';
import BagDarkIcon from '../../assets/images/bagDark.svg';
import {colors} from '../../assets/colors';
import {navigate} from '../utils/navigationUtils';

const CartIcon = ({quantity, type}) => {
  return (
    <TouchableOpacity onPress={() => navigate('CartScreen')}>
      {type === 'light' ? (
        <BagIcon height={20} width={20} />
      ) : (
        <BagDarkIcon height={20} width={20} />
      )}

      <View style={styles.circle}>
        <Text style={styles.bagQuantityText}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.navyBlue,
    backgroundColor: colors.primaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 6,
    top: -8,
  },
  bagQuantityText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 14,
    color: colors.white,
    marginTop: -2,
  },
});
