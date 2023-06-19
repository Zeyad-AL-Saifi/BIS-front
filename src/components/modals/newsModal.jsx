import React from "react";
import { Button, Modal } from "react-bootstrap";

const NewsModal = ({ showModal, handleCloseModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add news</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  placeholder="Enter content"
                />
              </div>
              <button type="submit" className="btn btn-primary m-3">
                Add
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewsModal;
