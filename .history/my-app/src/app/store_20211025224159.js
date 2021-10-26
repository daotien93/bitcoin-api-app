import { configureStore } from '@reduxjs/toolkit'

// Connect Api 
import { cryptoApi } from '../api/bitcoinApi'
import { cryptoNewsApi } from '../api/bitcoinNews'

export default configureStore({
    reducer: {
        // Get Api
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})

