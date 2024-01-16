import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

const homeStyles = StyleSheet.create({
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

export default homeStyles;
