import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;