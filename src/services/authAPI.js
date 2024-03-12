import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        signIn: builder.mutation({
            query: (formData) => ({
              url: '/jwt/login',
              method: 'POST',
              body: formData,
            }),
            invalidatesTags: ['User'],
          }),
    })
})

export const { useSignInMutation } = authApi;