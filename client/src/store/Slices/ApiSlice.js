import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: '/api',}),
    endpoints: (builder)=>({
        getProduct: builder.query({
        query: () => "/api/v1/product/Show",
        // transformResponse:(task)=>task.reverse(),  reverse the array of fetch by us
    }),
    getProductById: builder.mutation({
        query: (id) => ({
            url: `/api/v1/product/${id}`,
            method: "POST",
            // body: id,
          }),
    })
    })
})
export  const {useGetProductQuery,useGetProductByIdMutation} = apiSlice