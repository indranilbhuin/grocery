import {StatusBar, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../../assets/colors';

interface PrimaryViewProps {
  children?: ReactNode;
}

const PrimaryView: React.FC<PrimaryViewProps> = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={colors.charcoalBlack}
        barStyle={'light-content'}
      />
      {children}
    </View>
  );
};

export default PrimaryView;

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
