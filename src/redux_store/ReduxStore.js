import {configureStore} from '@reduxjs/toolkit'
import Users from './features/UserSlice'

export const store = configureStore({
    reducer:{
        user_data : Users,
    }
})