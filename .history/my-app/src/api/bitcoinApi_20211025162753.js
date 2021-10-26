import { createApi, fetchBaseQuery } from '@reduxjs/toolkit'
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c49450fbdbmsha6ec4456113dd04p1a56acjsn8cf6155f8293'
}
var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    headers: {

    }
  };
  