import { apiSlice } from "./apiSlice";

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
      providesTags: ["CAR"],
    }),
    getCarById: builder.query({
      query: (carId) => ({
        url: `/cars/getCar?carId=${carId}`,

        method: "GET",
      }),
      providesTags: ["CAR"],
    }),
  }),
});

export const { useFilterCarQuery, useGetCarByIdQuery } = carApi;
