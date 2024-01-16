import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/colors';
import BackIcon from '../../assets/images/backArrow.svg';
import {goBack} from '../utils/navigationUtils';
import CartIcon from './CartIcon';

const HeaderContainer = ({title, showCartButton, quantity}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <View style={styles.circle}>
            <BackIcon
              style={{
                transform: [{rotate: '90deg'}],
              }}
              height={13}
              width={13}
              stroke={colors.primaryText}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {showCartButton ? <CartIcon quantity={quantity} type={'dark'} /> : null}
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    marginLeft: '5%',
    marginRight: '5%',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: colors.primaryText,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 21,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: colors.secondaryText,
    fontFamily: 'Manrope-Regular',
  },
});
