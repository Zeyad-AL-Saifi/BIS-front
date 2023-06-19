import React from "react";
import ImageComp from "../../components/admin-components/ImageComp";
import TextComp from "../../components/admin-components/TextComp";
import NewsContainer from "../../components/home-components/NewsContainer";
const HomeManagementBody = () => {
  return (
    <div>
      <div className="container  ">
        <ImageComp />
        <hr className="rounded" />
        <TextComp />
        <hr className="rounded" />
        <div>
          <NewsContainer
            title={"Update News Section"}
            content={
              "You can add news from here but remember that you can add ten news at thesame time ℹ️"
            }
          />
          <button className="btn btn-dark w-100 mb-4 p-3">
            Click here to Add new news
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeManagementBody;
