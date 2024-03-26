
import { apiSlice } from "./apiSlice";


export const biddingAPI = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        biddingAllCard:builder.query({
            query:()=>({
                url:`BeadingCarController/all`,
                method:"GET"
            }),
            providesTags:['BIDDING']
        }),
        biddingCarById: builder.query({
            query: (carId) => ({
              url: `/BeadingCarController/edit/${carId}`,
      
              method: "GET",
            }),
            providesTags: ['BIDDING'],
          })
    })
})

export const {useBiddingAllCardQuery,useBiddingCarByIdQuery} = biddingAPI