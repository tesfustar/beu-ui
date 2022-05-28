import axios from 'axios'


const API=axios.create({baseURL:'https://beu-clone.herokuapp.com/api'})

API.interceptors.request.use((req)=>{
   if(localStorage.getItem('profile')){
req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
   }
   return req;
})

 const signInEmail=async(userData)=>{
     const res =await API.post(`/user/signup`,userData)
     if(res.data){
        localStorage.setItem('profile',JSON.stringify(res.data))
      }
     return res.data
 }


 const loginEmail=async(userData)=>{
    const res =await API.post(`/user/signin`,userData)
    if(res.data){
       localStorage.setItem('profile',JSON.stringify(res.data))
     }
    return res.data
}
 
 
const logout=()=>{
   localStorage.removeItem('profile')
}

const orderFood=async(data)=>{
   const res=await API.post(`/order/create`,data)
   if(res.data){
      return res.data
   }
   return res.data
}

const getSpecialFoods=async()=>{
   const res=await API.get('/food')
   
   if(res.data){
      return res.data
   }
   return res.data
}

const getResturant=async()=>{
   const res=await API.get('/resturant')
   
   if(res.data){
      return res.data
   }
   return res.data
}
const getSingleResturant=async(id)=>{
   const res=await API.get(`/resturant/${id}`)
   
   if(res.data){
      return res.data
   }
   return res.data
}

 const auth={signInEmail,loginEmail,logout,orderFood,getSpecialFoods,getResturant,getSingleResturant}

 export default auth