import React from "react";

import "../../utils/css/NewsContainer.css";
import NewsCard from "../public-components/NewsCard";
import { useState } from "react";
import NewsModal from "../modals/newsModal";
const NewsContainerManager = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="container">
      <h3>Update News Section</h3>
      <p>
        Click in any news you want to update it or you can add news from here
        but remember that you can add ten news at thesame time ℹ️
      </p>
      <div className="row row-cols-md-1 row-cols-lg-1 row-cols-xl-2 row-cols-xxl-3  ">
        <NewsCard onclick={handleShowModal} />
        <NewsCard onclick={handleShowModal} />
        <NewsCard onclick={handleShowModal} />
      </div>
      <NewsModal handleCloseModal={handleCloseModal} showModal={showModal} />
    </div>
  );
};

export default NewsContainerManager;
