import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://assaignment-12-server-delta.vercel.app"
})
const useAxiospublic = () => {
    return axiosPublic;
};

export default useAxiospublic;