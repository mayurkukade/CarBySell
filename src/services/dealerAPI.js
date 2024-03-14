import { apiSlice } from "./apiSlice";

export const dealerAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDealer: builder.query({
      query: (pageNo) => ({
        url: `/dealer/allDealers/${pageNo}`,
        transferResponce: console.log(pageNo),
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [{ type: "Dealer", pageNo: result.pageNo }] : [],
    }),
    deleteDealer: builder.mutation({
      query: (id) => ({
        url: `/dealer/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Dealer"],
    }),
    getDealer: builder.query({
      query: (id) => ({
        url: `/dealer/${id}`,
      }),
      providesTags: ["Dealer"],
    }),
    getEditDealer: builder.mutation({
      query: (userid) => ({
        url: `/dealer/updateDealer/${1107}`,
        method: "PUT",
        body: userid,
      }),
      invalidatesTags: ["Dealer"],
    }),
  }),
});

export const {
  useGetAllDealerQuery,
  useDeleteDealerMutation,
  useGetDealerQuery,
  useGetEditDealerMutation,
} = dealerAPI;
