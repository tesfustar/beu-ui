import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import auth from './auth'



export const createOrder=createAsyncThunk('user/order',async(data,thunkAPI)=>{
  try {
    return await auth.orderFood(data)
     } catch (error) {
      const message= (error.response && error.response.data && 
        error.response.data.message) ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
    })



const orderSlice= createSlice({
    name:'user',
    initialState:{
        orderItems:[],
        isOrdering:false,
        isFailed:false,
        isSuccess:false,
        message:''
    },
    reducers:{
      reset:(state)=>{
        state.orderItems=[]
        state.isOrdering=false
        state.isFailed=false
        state.isSuccess=false
        state.message=''
    },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createOrder.pending, (state, action) => {
           state.isOrdering=true
          })
        .addCase(createOrder.fulfilled, (state, action) => {
          state.isOrdering=false
          state.orderItems = action.payload
          state.isSuccess=true
           })
         .addCase(createOrder.rejected, (state, action) => {
          state.isOrdering=false
          state.isFailed=true 
          state.message=action.payload
          state.orderItems=null
          })
    }
})

export default orderSlice.reducer
export const {reset} = orderSlice.actions