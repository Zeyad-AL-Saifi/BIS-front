import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Check from "../../../utils/guard/load/Check";
import { updateNews } from '../../../store/Home/news/newsSlice'
const EditNewsPage = ({
  showModal,
  handleCloseModal,
  item,
  loading,
  error,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setContent(item.content);
    }
  }, [item]);

  useEffect(() => {
    dispatch({ type: "news/cleanRecord" });
  }, [dispatch]);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNews({ id: item.news_id, title, content })).unwrap();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{"update news"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={handelSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  value={title}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  value={content}
                  className="form-control"
                  id="content"
                  placeholder="Enter content"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
              <Check loading={loading} error={error}>
                <button type="submit" className="btn btn-primary m-3">
                  Submit
                </button>
              </Check>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditNewsPage;
