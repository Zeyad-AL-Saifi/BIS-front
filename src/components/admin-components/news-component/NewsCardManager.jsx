import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import EditNewsPage from '../news-component/EditNewsPage'
const NewsCardManager = ({ records, deleteData, loading, error }) => {
  const [showModal, setShowModal] = useState(false);

  const [item, setitem] = useState({});

  const handleShowModal = (item) => {
    setitem(item);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const data = records.map((ele, index) => {
    return (
      <tr key={ele.news_id}>
        <td>{++index}</td>
        <td>
          {ele.title}
          <p>{ele.description}</p>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => {
                handleShowModal(ele);
              }}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deletehadeler(ele);
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  const deletehadeler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.title}`))
      deleteData(item.news_id);
  };

  return (
    <>
      {data}
      <EditNewsPage
        loading={loading}
        item={item}
        error={error}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default NewsCardManager;
