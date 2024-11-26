import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../redux/features/cart/cartSlice';
import authApi from '../redux/features/auth/authApi';
import authReducer from '../redux/features/auth/authSilce';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath] : authApi.reducer,
    auth : authReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware)
});