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
    dealerIdByCar:builder.query({
      query:({id,pageNo})=>({
        url:`/car/dealer?dealerId=${id}&carStatus=ACTIVE&pageNo=${pageNo}`,
        method:"GET",
        transferResponse:console.log(id,pageNo)
      }),
      providesTags: ["CAR","Dealer"],
     
    }),
    getAllCar:builder.query({
      query:()=>({
        url:`/cars/mainFilter/${0}`,
        method:"GET"
      }),
      providesTags:["CAR"]
    })
  }),
});

export const { useFilterCarQuery, useGetCarByIdQuery,useGetAllCarQuery,useDealerIdByCarQuery } = carApi;
