import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../store/Home/news/newsSlice";

import "../../utils/css/NewsContainer.css";
import NewsCard from "../public-components/NewsCard/NewsCard";
import Check from "../../utils/guard/load/Check";
import TitleSections from "../public-components/TitleSections";

const NewsContainer = () => {
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
      <div className="container py-3">
        <TitleSections
          title={"Read all news 🗞️ "}
          content={
            "Here you will find all the exclusive news and events taking place within the organization"
          }
        />
        <div className="row row-cols-md-1 row-cols-lg-1 row-cols-xl-2 row-cols-xxl-3  ">
          {data}
        </div>
      </div>
    </Check>
  );
};

export default NewsContainer;
