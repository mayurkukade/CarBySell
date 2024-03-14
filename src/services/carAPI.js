import { apiSlice } from "./apiSlice";

export const carApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    filterCar: builder.query({
      query: (pageNo,url) => {
        console.log(url);
        return {
          url: `/cars/mainFilter/${pageNo}?${url}`,
          method: "GET",
        };
      },
      providesTags: ["CAR"],
    }),
    getCarById: builder.query({
      query: () => ({
        url: `/car/getCar?car_id=1`,

        method: "GET",
      }),
      providesTags: ["CAR"],
    }),
  }),
});

export const { useFilterCarQuery, useGetCarByIdQuery } = carApi;
