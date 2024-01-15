import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../../assets/colors';
import CategoryScreen from '../screens/CategoryScreen';
import HomeIcon from '../../assets/images/home.svg';
import CategoryIcon from '../../assets/images/category.svg';
import HeartIcon from '../../assets/images/heartIcon.svg';
import FavouriteScreen from '../screens/FavouriteScreen';
import MoreScreen from '../screens/MoreScreen';
import MoreIcon from '../../assets/images/more.svg';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const getTabBarIcon = (route, focused) => {
    switch (route.name) {
      case 'HomeScreen':
        return focused ? (
          <View style={styles.iconCircle}>
            <HomeIcon fill={colors.goldenYellow} />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <HomeIcon />
            <Text style={styles.iconText}>Home</Text>
          </View>
        );
      case 'CategoryScreen':
        return focused ? (
          <View style={styles.iconCircle}>
            <CategoryIcon fill={colors.goldenYellow} />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <CategoryIcon />
            <Text style={styles.iconText}>Categories</Text>
          </View>
        );
      case 'FavouriteScreen':
        return focused ? (
          <View style={styles.iconCircle}>
            <HeartIcon fill={colors.goldenYellow} />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <HeartIcon />
            <Text style={styles.iconText}>Favourite</Text>
          </View>
        );
      case 'MoreScreen':
        return focused ? (
          <View style={styles.iconCircle}>
            <MoreIcon fill={colors.goldenYellow} />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <MoreIcon />
            <Text style={styles.iconText}>More</Text>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primaryText,
          height: 75,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        })}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        })}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        })}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconText: {
    fontSize: 12,
    fontFamily: 'Manrope-Medium',
    color: colors.placeholderText,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: colors.secondaryText,
    height: 56,
    width: 56,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
});
