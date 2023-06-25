import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../store/Home/news/newsSlice";

import "../../utils/css/NewsContainer.css";
import NewsCard from "../public-components/NewsCard/NewsCard";
import Check from "../../utils/guard/load/Check";

const NewsContainer = (props) => {
  const { loading, error, records } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const data = records.map((ele) => {
    return (
      <>
        <NewsCard title={ele.title} content={ele.content} key={ele.news_id} />
      </>
    );
  });
  return (
    <Check loading={loading} error={error}>
      <div className="container">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <div className="row row-cols-md-1 row-cols-lg-1 row-cols-xl-2 row-cols-xxl-3  ">
          {data}
        </div>
      </div>
    </Check>
  );
};

export default NewsContainer;
