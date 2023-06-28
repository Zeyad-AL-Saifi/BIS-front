import React, { useState } from "react";
import {  Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNews, getAllNews } from "../../store/Home/news/newsSlice";
import SmallBtn from "../public-components/Buttons/SmallBtn";
const NewsModal = ({ showModal, handleCloseModal }) => {
  const dispatch = useDispatch();

  const [titleData, setTitleData] = useState("");
  const [contentData, setContentData] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addNews({ titleData, contentData }))
      .unwrap()
      .then(() => {
        handleCloseModal();
        setTitleData("");
        setContentData("");
      })
      .then(() => {
        dispatch(getAllNews());
      });
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{"add news"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={handelSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  value={titleData}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                  onChange={(e) => {
                    setTitleData(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  value={contentData}
                  className="form-control"
                  id="content"
                  placeholder="Enter content"
                  onChange={(e) => {
                    setContentData(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary m-3">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <SmallBtn
            color={"secondary"}
            handleClick={handleCloseModal}
            text={"Close"}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewsModal;
