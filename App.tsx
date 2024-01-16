import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {setNavigationRef} from './src/utils/navigationUtils';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={setNavigationRef}>
        <HomeStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
