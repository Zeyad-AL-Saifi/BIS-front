import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByID } from "../store/Home/news/newsSlice";

const UsePostById = (id) => {
    const dispatch = useDispatch();

    const { loading, error, record } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(getNewsByID(id));
    }, [dispatch, id]);
    return { loading, error, record }
}

export default UsePostById;
