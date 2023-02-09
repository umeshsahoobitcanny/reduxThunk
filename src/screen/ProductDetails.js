import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectedProducts,
  removeSelectedProduct,
} from '../components/redux/actions/productActions';
import {useRoute} from '@react-navigation/native';

const ProductDetails = navigation => {
  console.log(122, 'hello');
  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  const {productId} = useRoute();
  console.log(productId);
  const {image, title, price, category, description} = product;
  const fetchProductDetail = async id => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch(err => {
        console.log('Err: ', err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
