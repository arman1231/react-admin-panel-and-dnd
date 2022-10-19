import { configureStore } from '@reduxjs/toolkit'

// const reduxLogger = require('redux-logger')
import userReducer from './user/userSlice'

// const logger = reduxLogger.createLogger() 

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store