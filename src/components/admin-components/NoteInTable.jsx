import { memo } from "react";

const NoteInTable = ({
  ele,
  handleShowModal,
  handelDelete,
  index,
  handelUpdateStatusCode,
}) => {
  return (
    <tr>
      <td>
        <h5>
          <span className="counter">{index + 1} - </span>
          <span>
            From : {ele.student_name_from || ele.teacher_name_from}{" "}
          </span>{" "}
          <br />
          <span>To : {ele.teacher_name_to || ele.student_name_to}</span>
          <br />
          <span>Time : {ele.time}</span>
        </h5>
      </td>
      <td>
        <button
          className="btn btn-success m-1"
          onClick={handelUpdateStatusCode}
        >
          Accept
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => {
            handleShowModal(ele);
          }}
        >
          Show
        </button>
        <button className="btn btn-danger m-1" onClick={handelDelete}>
          Reject
        </button>
      </td>
    </tr>
  );
};

export default memo(NoteInTable);
