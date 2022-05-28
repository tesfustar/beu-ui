import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import auth from './auth'


export const getSpecials=createAsyncThunk('foods/specials',async()=>{
try {
    const response = await auth.getSpecialFoods()
     return response
} catch (error) {
    console.log(error)
}


    
}
)
const foodsSlice=createSlice({
    name:'food',
    initialState:{
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
    }
})

export default foodsSlice.reducer