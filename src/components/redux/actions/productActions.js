import {ActionTypes} from '../constants/action-type';
import FakeStoreApi from '../../apis/fakeStoreApi';
export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await FakeStoreApi.get('/products');
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data});
  };
};
export const setProducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
