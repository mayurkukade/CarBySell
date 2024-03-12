/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';





export const apiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://carresell-production.up.railway.app' }),
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token || Cookies.get('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  tagTypes: ["User", "Admin", "Dealer","CAR"],
  endpoints: (builder) => ({}),
  onError: (error) => {
    if (error.status === 401) { // Unauthorized error (token expired or not present)
      redirectToSignIn(); // Call the custom function to redirect to the sign-in page
    
    }
  }
});
// Define a custom function to handle redirection
export const redirectToSignIn = (history) => {
  history.push("/signin"); // Redirect to the sign-in page
};