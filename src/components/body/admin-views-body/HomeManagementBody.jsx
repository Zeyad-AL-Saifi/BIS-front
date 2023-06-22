import React, { useState } from "react";
import ImageComp from "../../admin-components/home-content-component/image-component/ImageComp";
import TextComp from "../../admin-components/home-content-component/TextComp";
import NewsModal from "../../modals/newsModal";
import NewsContainerManager from "../../admin-components/news-component/NewsContainerManager";

const HomeManagementBody = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  
  return (
    <div>
      <div className="container  ">
        <ImageComp />
        <hr className="rounded" />
        <TextComp />
        <hr className="rounded" />
        <div>
          <NewsContainerManager />
        </div>
        <hr className="rounded" />
        <div>
          <button
            className="btn btn-dark w-100 mb-4 p-3"
            onClick={handleShowModal}
          >
            Click here to Add new news
          </button>
        </div>
      </div>
      <NewsModal setShowModal={ setShowModal} handleCloseModal={handleCloseModal} showModal={showModal} />
    </div>
  );
};

export default HomeManagementBody;
