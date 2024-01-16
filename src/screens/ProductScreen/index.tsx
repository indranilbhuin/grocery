import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
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
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCartData,
} from '../../redux/slices/cartSlice';
import MinusIcon from '../../../assets/images/minus.svg';
import PlusIcon from '../../../assets/images/plus.svg';
import {navigate} from '../../utils/navigationUtils';
import {
  addToFavourite,
  removeFromFavourite,
  selectFavouriteData,
} from '../../redux/slices/favouriteSlice';
import styles from './style';

const ProductScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {productId} = route.params;
  const productData = useSelector(selectProductData);
  const {width: screenWidth} = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);
  const items = useSelector(selectCartData);
  const favourites = useSelector(selectFavouriteData);

  console.log(productData);

  useEffect(() => {
    dispatch(fetchProductRequest(productId));
  }, []);

  const isAddedToCart = productId => items.some(item => item.id === productId);
  const isFavourite = productId =>
    favourites.some(item => item.id === productId);

  const handleAddToCart = product => {
    dispatch(addToCart({item: product}));
  };

  const handleIncreaseQuantity = productId => {
    dispatch(increaseQuantity({id: productId}));
  };

  const handleDecreaseQuantity = productId => {
    dispatch(decreaseQuantity({id: productId}));
  };

  const handleBuyNow = product => {
    dispatch(addToCart({item: product}));
    navigate('CartScreen');
  };

  const handleToggleFavourite = product => {
    if (isFavourite(product.id)) {
      dispatch(removeFromFavourite({id: product.id}));
    } else {
      dispatch(addToFavourite({item: product}));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <HeaderContainer
        title={undefined}
        showCartButton={true}
        quantity={items?.length}
      />
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
              <Image
                source={{uri: item}}
                style={styles.productImage}
                resizeMode="contain"
              />
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
          <TouchableOpacity
            onPress={() => handleToggleFavourite(productData)}
            style={styles.heartContainer}>
            {isFavourite(productId) ? (
              <HeartIcon height={24} width={24} fill={colors.offRed} />
            ) : (
              <HeartIcon height={24} width={24} />
            )}
          </TouchableOpacity>
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
                $
                {(
                  (productData?.price * productData?.discountPercentage) /
                  100
                ).toFixed(2)}{' '}
                OFF
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
            {isAddedToCart(productId) ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => handleDecreaseQuantity(productId)}
                  style={[styles.plusButton, {marginRight: 11}]}>
                  <MinusIcon height={20} width={20} />
                </TouchableOpacity>
                <Text style={[styles.cartText, {marginRight: 11}]}>
                  {items.find(item => item.id === productId)?.quantity || 0}
                </Text>
                <TouchableOpacity
                  onPress={() => handleIncreaseQuantity(productId)}
                  style={styles.plusButton}>
                  <PlusIcon height={20} width={20} />
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => handleAddToCart(productData)}
                  style={styles.addButton}>
                  <Text style={styles.cartText}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            )}
            {isAddedToCart(productId) ? (
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => navigate('CartScreen')}>
                <Text style={[styles.cartText, {color: colors.white}]}>
                  Go To Cart
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => handleBuyNow(productData)}>
                <Text style={[styles.cartText, {color: colors.white}]}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            )}
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
