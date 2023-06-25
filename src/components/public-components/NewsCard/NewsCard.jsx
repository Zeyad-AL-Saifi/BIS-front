import React from "react";
import './NewsCard.css'
const NewsCard = ({ title, content }) => {
  return (
    <>
      <div className="col ">
        <div className="card custom-card">
          <div className="card-header">
            <h5>{title}</h5>
          </div>
          <div className="card-body">
            <p className="content-news">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
