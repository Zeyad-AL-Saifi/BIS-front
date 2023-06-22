
import React, { useState } from "react";

import NoteInTable from './NoteInTable'
import FilterForm from '../public/filterForm'
import NoteShowModal from '../../modals/NoteShowModal'
const NoteManageBody = ({
  filterNote,
  title,
  handelDelete,
  handelInput,
  handelUpdateStatusCode,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [item, setItem] = useState({});
  const handleShowModal = (item) => {
    setItem(item);
    setShowModal(true);
  };

  const deletehadeler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.note_id}`)) {
      handelDelete(item.note_id);
    }
  };

  const updateHandler = (item) => {
    if (
      window.confirm(`Do you sure you accepte this note ? 👌 ${item.note_id}`)
    ) {
      handelUpdateStatusCode(item);
    }
  };

  const data = filterNote.map((ele, index) => {
    return (
      <NoteInTable
        key={ele.note_id}
        index={index}
        ele={ele}
        handelUpdateStatusCode={() => {
          updateHandler(ele);
        }}
        handleShowModal={handleShowModal}
        handelDelete={() => {
          deletehadeler(ele);
        }}
      />
    );
  });

  return (
    <div style={{ minHeight: "670px" }}>
      <FilterForm handelInput={handelInput} />
      <table className=" table">
        <thead>
          <tr>
            <th>
              <h2>{title}</h2>
            </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
      <div className="text-center">
        <NoteShowModal
          item={item}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default NoteManageBody;
