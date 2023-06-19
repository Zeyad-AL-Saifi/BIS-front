import React from "react";

import "../../utils/css/NewsContainer.css";
import NewsCard from "../public-components/NewsCard";

const NewsContainer = (props) => {

  return (
    <div className="container">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <div className="row row-cols-md-1 row-cols-lg-1 row-cols-xl-2 row-cols-xxl-3  ">
        <NewsCard  />
        <NewsCard  />
        <NewsCard />
      </div>
    </div>
  );
};

export default NewsContainer;
