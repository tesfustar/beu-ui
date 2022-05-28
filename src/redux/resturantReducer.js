import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import auth from './auth'

export const getResturants=createAsyncThunk('foods/resturant',async()=>{
try {
    const response = await auth.getResturant()
    return response
} catch (error) {
    console.log(error)
}})

export const getSingleResturants=createAsyncThunk('resturant/detail',async(id)=>{
    try {
        const response = await auth.getSingleResturant(id)
        return response
    } catch (error) {
        console.log(error)
    }})
const resturantSlice=createSlice({
    name:'food',
    initialState:{
        resturant:[],
        resturants:[],
        isLoading:false,
        isError:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getResturants.pending, (state, action) => {
           state.isLoading=true
          })
        .addCase(getResturants.fulfilled, (state, action) => {
          state.resturants=action.payload
          state.isLoading=false
           })
         .addCase(getResturants.rejected, (state, action) => {
          state.isError=true
          })
          .addCase(getSingleResturants.pending, (state, action) => {
              state.isLoading=true
          
           })
           .addCase(getSingleResturants.fulfilled, (state, action) => {
            state.isLoading=false
            state.resturant=action.payload
         })
         .addCase(getSingleResturants.rejected, (state, action) => {
            state.isError=true
            })
    }
})

export default resturantSlice.reducer