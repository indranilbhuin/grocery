import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {colors} from '../../../assets/colors';
import HeaderContainer from '../../components/HeaderContainer';
import Rating from '../../components/Rating';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import HeartIcon from '../../../assets/images/heartIcon.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProductRequest,
  selectProductData,
} from '../../redux/slices/productSlice';

const ProductScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {productId} = route.params;
  const productData = useSelector(selectProductData);
  const {width: screenWidth} = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(productData);

  useEffect(() => {
    dispatch(fetchProductRequest(productId));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <HeaderContainer />
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>{productData.title}</Text>
          <View style={styles.ratingContainer}>
            <Rating rating={productData.rating} />
            <Text style={styles.reviewText}>110 Reviews</Text>
          </View>
        </View>
        <View>
          <Carousel
            data={productData?.images}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={styles.productImage} resizeMode='contain' />
            )}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={productData?.images?.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.8}
          />
          <View style={styles.heartContainer}>
            <HeartIcon height={24} width={24} />
          </View>
        </View>
        <View style={styles.productDetailsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={styles.priceText}>${productData?.price}</Text>
            <View style={styles.promotionContainer}>
              <Text style={styles.promotionText}>
                ${((productData?.price * productData?.discountPercentage)/100).toFixed(2)} OFF
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.cartText}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={[styles.cartText, {color: colors.white}]}>
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30, marginBottom: 10}}>
            <Text style={styles.detailTitleText}>Details</Text>
            <Text
              style={[styles.detailTitleText, {color: colors.placeholderText}]}>
              {productData?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: '100%',
  },
  topContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: 21,
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Manrope-ExtraBold',
    color: colors.secondaryText,
  },
  productImage: {
    width: '100%',
    height: 207,
    marginTop: 15,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -18,
    left: -10,
  },
  paginationDot: {
    width: 18,
    height: 5,
    borderRadius: 4,
    marginRight: -10,
    backgroundColor: colors.primaryBackground,
  },
  paginationInactiveDot: {
    width: 18,
    height: 5,
    borderRadius: 4,
    marginRight: -10,
    backgroundColor: colors.primaryText,
  },
  heartContainer: {
    width: 58,
    height: 58,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 25,
    right: 10,
  },
  productDetailsContainer: {
    marginTop: 26,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  priceText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: colors.navyBlue,
  },
  promotionText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: colors.offWhite,
  },
  promotionContainer: {
    backgroundColor: colors.navyBlue,
    borderRadius: 70,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 14,
  },
  addButton: {
    height: 56,
    width: 143,
    borderColor: colors.navyBlue,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    height: 56,
    width: 169,
    backgroundColor: colors.navyBlue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 14,
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    color: colors.navyBlue,
  },
  detailTitleText: {
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: colors.secondaryText,
    lineHeight: 24,
  },
  reviewText: {
    marginLeft: 5,
    color: colors.offGray,
    fontSize: 14,
    fontFamily: 'Manrope-Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
});
