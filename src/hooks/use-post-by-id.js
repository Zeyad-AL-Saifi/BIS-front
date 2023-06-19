import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../redux/postSlice";
import { useParams } from "react-router-dom";

const UsePostById = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { loading, error, record } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPostById(id));
    }, [dispatch, id]);
    return { loading, error, record }
}

export default UsePostById;
