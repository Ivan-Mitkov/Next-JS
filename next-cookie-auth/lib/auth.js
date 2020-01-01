import axios from 'axios';

//to pass the cookies into backend we need this configuration
axios.defaults.withCredentials=true;

export const loginUser=async (email,password)=>{
    const response =await axios.post('/api/login',{email,password});
    // console.log(response.data)

}
export const getUserProfile=async ()=>{
    const {data} =await axios.get('/api/profile');
    // console.log('getUserProfile data : ',data)
    return data;

}