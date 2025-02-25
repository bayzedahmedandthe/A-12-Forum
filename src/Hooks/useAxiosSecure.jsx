import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Authentication/useAuth";


const axiosSecure = axios.create({
    baseURL: "https://assaignment-12-server-delta.vercel.app"
})
const useAxiosSecure = () => {
    const {logOutUser} = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error){
        return Promise.reject(error);
    })
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async function(error){
        const status = error.response.status;
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;