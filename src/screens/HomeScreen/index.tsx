import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../assets/colors';
import SearchIcon from '../../../assets/images/search.svg';
import BagIcon from '../../../assets/images/bag.svg';
import PromotionCard from '../../components/PromotionCard';
import ProductCard from '../../components/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchAllProductsRequest,
  selectAllProductsData,
} from '../../redux/slices/allProductsSlice';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const allProducts = useSelector(selectAllProductsData);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const dispatch = useDispatch();
  console.log(allProducts);

  useEffect(() => {
    dispatch(fetchAllProductsRequest());
  }, [searchText]);

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
          <View>
            <BagIcon height={18} width={18} />
            <View style={styles.circle}>
              <Text style={styles.bagQuantityText}>3</Text>
            </View>
          </View>
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
          <Text style={styles.smallText}>DELIVERY TO</Text>
          <Text style={styles.smallText}>WITHIN</Text>
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
          {filteredProducts.length !== 0 ? (
            <ProductCard allProducts={filteredProducts} />
          ) : (
            <Text>No products</Text>
          )}
        </View>
      </ScrollView>
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
    top: -10,
  },
  bagQuantityText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 14,
    color: colors.white,
    marginTop: -2,
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
});
