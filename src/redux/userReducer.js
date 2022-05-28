import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import auth from './auth'



export const signByEmail=createAsyncThunk('auth/google',async(user,thunkAPI)=>{
  try {
    return await auth.signInEmail(user)
     } catch (error) {
      const message= (error.response && error.response.data && 
        error.response.data.message) ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
    })


//sign in with google
export const loginByEmail=createAsyncThunk('auth/google',async(user,thunkAPI)=>{
  try {
    return await auth.loginEmail(user)
     } catch (error) {
      const message= (error.response && error.response.data && 
        error.response.data.message) ||error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
    })


export const signGoogle=createAsyncThunk('auth/google',async(user,thunkAPI)=>{
try {
  return  localStorage.setItem('profile',JSON.stringify(user))
   } catch (error) {
    console.log(error)
  }
  })

  export const signFacebook=createAsyncThunk('auth/google',(user,thunkAPI)=>{
    try {
      return localStorage.setItem('profile',JSON.stringify(user))
       } catch (error) {
        const message= (error.response && error.response.data && 
          error.response.data.message) ||error.message || error.toString()
          return thunkAPI.rejectWithValue(message)
         
      }
      })
 export const logout=createAsyncThunk('auth/logout',async()=>{
      await auth.logout()
 })
const user=JSON.parse((localStorage.getItem('profile'))) 
const userSlice= createSlice({
    name:'user',
    initialState:{
        currentUser:user? user : null,
        isLoading:false,
        isError:false,
        isSuccess:false,
        message:''
    },
    reducers:{
      reset:(state)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=false
        state.message=''
    },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signByEmail.pending, (state, action) => {
           state.isLoading=true
          })
        .addCase(signByEmail.fulfilled, (state, action) => {
          state.isLoading=false
          state.currentUser=action.payload
          state.isSuccess=true
           })
         .addCase(signByEmail.rejected, (state, action) => {
          state.isLoading=false
          state.isError=true
          state.message=action.payload
          state.currentUser=null
          })
          .addCase(logout.fulfilled, (state, action)=>{
            state.currentUser=null
          })
    }
})

export default userSlice.reducer
export const {reset} =userSlice.actions