import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../assets/colors';
import SearchIcon from '../../../assets/images/search.svg';
import PromotionCard from '../../components/PromotionCard';
import ProductCard from '../../components/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchAllProductsRequest,
  selectAllProductsData,
} from '../../redux/slices/allProductsSlice';
import DropDownIcon from '../../../assets/images/downArrow.svg';
import DropDown from '../../components/DropDown';
import Lottie from 'lottie-react-native';
import {navigate} from '../../utils/navigationUtils';
import CartIcon from '../../components/CartIcon';
import {selectCartData} from '../../redux/slices/cartSlice';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const allProducts = useSelector(selectAllProductsData);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isAddressDropdownVisible, setIsAddressDropdownVisible] =
    useState(false);
  const [isTimeDropdownVisible, setIsTimeDropdownVisible] = useState(false);
  const addresses = [
    'Green Way 3000, Sylhet',
    'Whitefield 101, Bangalore',
    'Another Address 2',
  ];
  const timings = ['1 Hour', '2 Hour', '3 Hour'];
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [selectedTiming, setSelectedTiming] = useState(timings[0]);
  const cartItems = useSelector(selectCartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsRequest());
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts.length !== 0]);

  const toggleAddressDropdown = () => {
    setIsAddressDropdownVisible(!isAddressDropdownVisible);
  };
  const toggleTimingDropdown = () => {
    setIsTimeDropdownVisible(!isTimeDropdownVisible);
  };

  const handleAddressSelect = address => {
    setSelectedAddress(address);
    setIsAddressDropdownVisible(false);
  };
  const handleTimingSelect = timing => {
    setSelectedTiming(timing);
    setIsTimeDropdownVisible(false);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = allProducts.filter(product => {
      const {title, description, brand, category} = product;
      const searchItem = text.toLowerCase();

      return (
        title.toLowerCase().includes(searchItem) ||
        description.toLowerCase().includes(searchItem) ||
        brand.toLowerCase().includes(searchItem) ||
        category.toLowerCase().includes(searchItem)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <View>
      <StatusBar backgroundColor={colors.navyBlue} barStyle={'light-content'} />
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hey, Rahul</Text>
          <CartIcon quantity={cartItems?.length} type={'light'} />
        </View>

        <View style={styles.searchBarContainer}>
          <SearchIcon height={18} width={18} style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search Products or store"
            value={searchText}
            onChangeText={handleSearch}
            placeholderTextColor={colors.placeholderText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.smallText}>DELIVERY TO</Text>
            <TouchableOpacity onPress={toggleAddressDropdown}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.addressText}>{selectedAddress}</Text>
                <DropDownIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.smallText}>WITHIN</Text>
            <TouchableOpacity onPress={toggleTimingDropdown}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.addressText}>{selectedTiming}</Text>
                <DropDownIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PromotionCard />
            <PromotionCard />
          </ScrollView>
          <Text
            style={[
              styles.titleText,
              {color: colors.secondaryText, marginTop: 27},
            ]}>
            Recommended
          </Text>
          {filteredProducts?.length !== 0 ? (
            <ProductCard allProducts={filteredProducts} />
          ) : (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Lottie
                style={styles.lottieImage}
                source={require('../../../assets/jsons/nothing.json')}
                autoPlay
                testID="lottie-image"
              />
              <Text style={styles.productNotFoundText}>No product found</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <DropDown
        isDropdownVisible={isAddressDropdownVisible}
        setIsDropdownVisible={() => setIsAddressDropdownVisible(false)}
        data={addresses}
        handleSelectItem={handleAddressSelect}
        type={'Address'}
      />
      <DropDown
        isDropdownVisible={isTimeDropdownVisible}
        setIsDropdownVisible={() => setIsAddressDropdownVisible(false)}
        data={timings}
        handleSelectItem={handleTimingSelect}
        type={'Timing'}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBarContainer: {
    justifyContent: 'flex-start',
    backgroundColor: colors.midnightBlue,
    borderRadius: 28,
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 28,
  },
  searchBar: {
    color: colors.pureWhite,
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    width: '100%',
    includeFontPadding: false,
  },
  headerContainer: {
    height: 220,
    backgroundColor: colors.navyBlue,
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-around',
  },
  titleText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    fontSize: 22,
    color: colors.primaryText,
  },
  searchIcon: {
    marginRight: 12,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 11,
    fontFamily: 'Manrope-ExtraBold',
    color: colors.primaryText,
    opacity: 0.5,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  scrollContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: 27,
    marginBottom: 250,
  },
  productCardContainer: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    marginRight: 10,
    color: colors.primaryText,
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
