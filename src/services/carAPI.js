
import { apiSlice } from "./apiSlice";

import Cookies from "js-cookie";
const token = Cookies.get('token')
console.log(token)
export const carApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    filterCar: builder.query({
      query: (url) => {
        console.log(url);
        return {
          url: `/cars/mainFilter/0?${url}`,
          method: "GET",
        };
      },
      providesTags:['CAR']
    }),
    getCarById: builder.query({
        query: () => ({
          url: `/car/getCar?car_id=1`,
        //   headers: {
        //     "Content-type": "application/json; charset=UTF-8",
        //     Authorization: `Bearer ${token}`,
        //   },
          method: "GET",
        }),
        providesTags:['CAR'],
 
      }),
  
  }),
});

export const { useFilterCarQuery,useGetCarByIdQuery } = carApi;
