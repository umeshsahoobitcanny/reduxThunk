import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
const Stack = createNativeStackNavigator();
const Header = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="productList">
        <Stack.Screen name="productList" component={ProductListing} />

        <Stack.Screen name="ProductDetail" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Header;

const styles = StyleSheet.create({});
