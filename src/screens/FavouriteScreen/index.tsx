import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/colors';
import {useSelector} from 'react-redux';
import {selectFavouriteData} from '../../redux/slices/favouriteSlice';
import ProductCard from '../../components/ProductCard';
import Lottie from 'lottie-react-native';

const FavouriteScreen = () => {
  const favourites = useSelector(selectFavouriteData);
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Your Wishlist</Text>
      </View>
      <View style={{paddingLeft: '5%', paddingRight: '5%'}}>
        {favourites?.length !== 0 ? (
          <ProductCard allProducts={favourites} />
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '90%',
            }}>
            <Lottie
              style={styles.lottieImage}
              source={require('../../../assets/jsons/emptyWishlist.json')}
              autoPlay
            />
            <Text style={styles.productNotFoundText}>
              You haven't added anything to wishlist
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  topContainer: {
    height: 70,
    backgroundColor: colors.navyBlue,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  titleText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 22,
    color: colors.primaryText,
    marginTop: 15,
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
