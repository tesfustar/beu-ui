import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import foodReducer from './foodReducer'
import orderReducer from './orderReducer'
import resturantReducer from './resturantReducer'
export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        food:foodReducer,
        order:orderReducer,
        resturant:resturantReducer
    }
})