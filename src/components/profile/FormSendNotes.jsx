import React from "react";

const FormSendNotes = () => {
  return (
    <div>
      <div className="row">
        <h3 className=" m-4">Do you want to send a note ?</h3>
        <div className="add-new-note ">
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textSend" className="form-label">
                Who do you want to send it to
              </label>
              <input
                type="text"
                className="form-control"
                id="textSend"
                placeholder="ُEnter his/her name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows={3}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSendNotes;
