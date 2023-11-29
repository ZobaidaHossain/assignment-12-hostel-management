import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure=axios.create({
    baseURL:'https://hostel-management-server-sand.vercel.app'
})

const useAxiosSecure = () => {
    const navigate=useNavigate();
    const{logOut}=useAuth();
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
        // console.log('request stopped by interceptors',token)
        config.headers.authorization=`Bearer ${token}`;
        return config;},function (error){

        return Promise.reject(error);

    });
      //intercepts 401 and 403 status
      axiosSecure.interceptors.response.use(function(response){
        return response;
    },async(error)=>{
        const status=error.response.status;
        // console.log('status error in the interceptor',status)
if(status===401 || status===403){
    await logOut();
    navigate('/signin')
}

        return Promise.reject(error);
    }
    )

return axiosSecure;
};

export default useAxiosSecure;