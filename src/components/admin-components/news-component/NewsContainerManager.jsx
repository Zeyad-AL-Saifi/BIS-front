import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItemsManager from "../news-component/NewsItemManager";
import { deleteNews, getAllNews } from "../../../store/Home/news/newsSlice";

import "../../../utils/css/NewsContainer.css";
import TitleSections from "../../public-components/TitleSections";
import NewsModal from "../../modals/newsModal";
import PrimaryBtn from "../../public-components/Buttons/PrimaryBtn";
const NewsContainerManager = () => {
  const { loading, error, records } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const deleteData = useCallback((id) => dispatch(deleteNews(id)), [dispatch]);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="py-3">
      <TitleSections
        title={"Manage the news from here"}
        content={"Add new news or update or delete the news ℹ️"}
      />
      <NewsItemsManager
        error={error}
        loading={loading}
        records={records}
        deleteData={deleteData}
      />
      <div>
        <PrimaryBtn
          handleClick={handleShowModal}
          text={"Click here to Add new news"}
        />
      </div>
      <NewsModal
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
      />
    </div>
  );
};

export default NewsContainerManager;
