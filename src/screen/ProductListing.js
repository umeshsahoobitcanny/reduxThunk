import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProdcutComponet from './ProdcutComponet';
import {
  fetchProducts,
  setProducts,
} from '../components/redux/actions/productActions';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
const ProductListing = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch(err => {
  //       console.log('ERR', err);
  //     });
  //   dispatch(setProducts(response.data));
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  // console.log('Products', products);

  useEffect(() => {
    dispatch(fetchProducts());
  },[]);
  return (
    <View>
      <ProdcutComponet />
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({});
