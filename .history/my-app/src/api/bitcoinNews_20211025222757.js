import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const coinNewsHeaders = {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': 'c49450fbdbmsha6ec4456113dd04p1a56acjsn8cf6155f8293'
    }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url) => ({ url, headers: coinNewsHeaders })

export const coinNewsApi= createApi({
    reducerPath: 'coinNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
})