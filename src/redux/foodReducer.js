import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import auth from './auth'


export const getSpecials=createAsyncThunk('foods/specials',async()=>{
try {
    const response = await auth.getSpecialFoods()
     return response
} catch (error) {
    console.log(error)
}})
export const getFoodsBySearch=createAsyncThunk('foods/search',async(query)=>{
    try {
        const response = await auth.getSearchFoods(query)
         return response
    } catch (error) {
        console.log(error)
    }})



const foodsSlice=createSlice({
    name:'food',
    initialState:{
        searchFoods:[],
        foods:[],
        isLoading:false,
        isError:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getSpecials.pending, (state, action) => {
           state.isLoading=true
          })
        .addCase(getSpecials.fulfilled, (state, action) => {
          state.foods=action.payload
          state.isLoading=false
           })
         .addCase(getSpecials.rejected, (state, action) => {
          state.isError=true
          })
          .addCase(getFoodsBySearch.pending, (state, action) => {
            state.isLoading=true
           })
          .addCase(getFoodsBySearch.fulfilled, (state, action) => {
            state.searchFoods=action.payload
            state.isLoading=false
             })
    }
})

export default foodsSlice.reducer