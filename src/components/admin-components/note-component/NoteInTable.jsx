import SmallBtn from "../../public-components/Buttons/SmallBtn";

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
        <SmallBtn
          handleClick={handelUpdateStatusCode}
          text={"Accept"}
          color={"success"}
        />
        <SmallBtn
          handleClick={() => {
            handleShowModal(ele);
          }}
          text={"Show"}
          color={"primary"}
        />
        <SmallBtn handleClick={handelDelete} text={"Reject"} color={"danger"} />
      </td>
    </tr>
  );
};

export default NoteInTable;
