// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import { apiSlice } from '../services/apiSlice';
import { authApi } from '../services/authAPI';
import { carApi } from '../services/carAPI';
import { dealerAPI } from '../services/dealerAPI';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
    [authApi.reducerPath]:authApi.reducer,
    [carApi.reducerPath]:carApi.reducer,
    [dealerAPI.reducerPath]:dealerAPI.reducer
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
});
