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
        url: `/dealer/updateDealer/${userid.id}`,
        method: "PUT",
       transerResponse:console.log(userid.id),
        body: userid.inputField,
      }),
      invalidatesTags: ["Dealer"],
    }),
    getAllDealerCompleteBooking: builder.query({
      query: ({page,id}) => ({
        url: `/confirmBooking/getAllBookingsByDealerId?pageNo=${page}&dealerId=${id}`,
      }),
      providesTags: ["DEALERBOOKING"],
    }),
    getAllDealerPendingBooking: builder.query({
      query: () => ({
        url: `/booking/getPendingBookingDetailsByDealerID?pageNo=0&dealerId=14`,
      }),
      providesTags: ["DEALERBOOKING"],
    })
    
  }),
});

export const {
  useGetAllDealerQuery,
  useDeleteDealerMutation,
  useGetDealerQuery,
  useGetEditDealerMutation,
  useGetAllDealerCompleteBookingQuery,
  useGetAllDealerPendingBookingQuery
  
} = dealerAPI;
