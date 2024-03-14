import { apiSlice } from "./apiSlice";

export const carApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    filterCar: builder.query({
      query: (urlState) => {
        console.log(urlState);
        return {
          url: `/cars/mainFilter/${0}?${urlState}`,
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
    dealerByCar:builder.query({
      url:``
    })
  }),
});

export const { useFilterCarQuery, useGetCarByIdQuery } = carApi;
