

const NoteInTable = (props) => {
  return (
    <tr>
      <td>
        <h5>
          <span class="counter">1 - </span>
          <span>From : Zeyad mohammad alsaifi </span> <br />
          <span>To : Mr,Khaled srhan</span>
        </h5>
      </td>
      <td>
        <button class="btn btn-success m-1">Accept</button>
        <button class="btn btn-primary m-1" onClick={props.handleShowModal}>
          Show
        </button>
        <button class="btn btn-danger m-1">Reject</button>
      </td>
    </tr>
  );
};

export default NoteInTable;
