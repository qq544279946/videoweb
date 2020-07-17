import axios from 'axios'

axios.interceptors.response.use(response=>{
    
    return response.data;
},
error=>{
    alert(error)
})


export default axios;