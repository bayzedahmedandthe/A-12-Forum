import { useEffect, useState } from "react";
import useAxiospublic from "../Hooks/useAxiospublic";
import { Helmet } from "react-helmet-async";


const ViewComments = () => {
    const axiosPublic = useAxiospublic();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axiosPublic.get(`/comments/${postId}`)
        .then(res => {
            console.log(res.data);
        })
    }, []);
    return (
        <div>
             <Helmet>
                <title>View Comments</title>
            </Helmet>
            
        </div>
    );
};

export default ViewComments;