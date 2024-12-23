import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cart/cartSlice';
import authApi from '../redux/features/auth/authApi';
import authReducer from '../redux/features/auth/authSilce';
import productsApi from "../redux/features/products/productsApi";
import reviewApi from "../redux/features/reviews/reviewsApi";
import statsApi from "../redux/features/stats/statsApi";
import orderApi from "../redux/features/orders/orderApi";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewApi.middleware,statsApi.middleware,orderApi.middleware),
});