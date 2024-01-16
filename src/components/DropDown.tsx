import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LocationIcon from '../../assets/images/location.svg';
import {colors} from '../../assets/colors';

const DropDown = ({
  isDropdownVisible,
  setIsDropdownVisible,
  data,
  handleSelectItem,
  type,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isDropdownVisible}
      animationType="fade"
      onRequestClose={() => setIsDropdownVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <View style={styles.innerToastContainer}>
            <Text style={styles.addressTitleText}>Choose your {type}</Text>
            <FlatList
              data={data}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleSelectItem(item)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                  }}>
                  {type === 'Address' ? (
                    <>
                      <LocationIcon height={15} width={15} />
                      <Text
                        style={[
                          styles.addressDropdownItem,
                          {marginRight: 5, fontFamily: 'Manrope-Bold'},
                        ]}>
                        Home
                      </Text>
                    </>
                  ) : null}

                  <Text style={styles.addressDropdownItem}>{item}</Text>
                </TouchableOpacity>
              )}
              style={{marginTop: 10}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  addressDropdownItem: {
    fontFamily: 'Manrope-Medium',
    color: colors.charcoalBlack,
  },
  modalInnerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  innerToastContainer: {
    backgroundColor: colors.white,
    height: 170,
    width: '80%',
    borderRadius: 8,
    paddingTop: 5,
    padding: 12,
  },
  addressTitleText: {
    fontFamily: 'Manrope-SemiBold',
    includeFontPadding: false,
    color: colors.charcoalBlack,
    fontSize: 18,
    marginTop: 10,
  },
});
