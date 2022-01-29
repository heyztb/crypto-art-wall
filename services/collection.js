import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getCollection: builder.query({
      query: () => `collection`
    }),
  }),
});

export const { useGetCollectionQuery } = collectionApi;

