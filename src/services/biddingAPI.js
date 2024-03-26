
import { apiSlice } from "./apiSlice";


export const biddingAPI = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        biddingAllCard:builder.query({
            query:()=>({
                url:`BeadingCarController/all`,
                method:"GET"
            }),
            providesTags:['BIDDING']
        })
    })
})

export const {useBiddingAllCardQuery} = biddingAPI