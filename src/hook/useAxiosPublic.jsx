import axios from "axios";


const axiosPublic =axios.create({
    baseURL:'https://hostel-management-server-sand.vercel.app'
})

const useAxiosPublic=()=>{
    return axiosPublic;
}

export default useAxiosPublic;