import React from "react";
const NewsCard = ({ title, content }) => {
  return (
    <>
      <div className="col ">
        <div className="card custom-card">
          <div className="card-header">
            <h1>{title}</h1>
          </div>
          <div className="card-body">
            <h4 className="content-news">{content}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
