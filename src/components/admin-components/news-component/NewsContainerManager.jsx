import React, { useEffect ,useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItemsManager from '../news-component/NewsItemManager'
import { deleteNews, getAllNews } from "../../../store/Home/news/newsSlice";
import Check from "../../../utils/guard/load/Check";
import "../../../utils/css/NewsContainer.css";
const NewsContainerManager = () => {
  const { loading, error, records } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const deleteData = useCallback((id) => dispatch(deleteNews(id)), [dispatch]);

  return (
    <Check loading={loading} error={error}>
      <NewsItemsManager
        error={error}
        loading={loading}
        records={records}
        deleteData={deleteData}
      />
    </Check>
  );
};

export default NewsContainerManager;
