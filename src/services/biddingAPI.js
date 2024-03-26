
import { apiSlice } from "./apiSlice";


export const biddingAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    biddingAllCard: builder.query({
      query: () => ({
        url: `BeadingCarController/all`,
        method: "GET",
      }),
      providesTags: ["BIDDING"],
    }),
    biddingCarById: builder.query({
      query: (carId) => ({
        url: `/BeadingCarController/edit/${carId}`,

        method: "GET",
      }),
      providesTags: ["BIDDING"],
    }),
    biddingcarUpdate: builder.mutation({
      query: ({ data, carId }) => ({
        url: `BeadingCarController/edit/${carId}`,
        transferResponse: console.log(data, carId),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["BIDDING"],
    }),
    biddingRemove: builder.mutation({
      query: (carId) => ({
        url: `BeadingCarController/delete/${carId}`,
        transferResponse: console.log(carId),
        method: "DELETE",
      }),
      invalidatesTags: ["BIDDING"],
    }),
  }),
});

export const {useBiddingAllCardQuery,useBiddingCarByIdQuery, useBiddingcarUpdateMutation, useBiddingRemoveMutation} = biddingAPI