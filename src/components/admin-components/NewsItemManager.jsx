import React from "react";
import { memo } from "react";
import NewsCardManager from "./NewsCardManager";
import { Table } from "react-bootstrap";
const NewsItemsManager = ({ records, deleteData, error, loading }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <NewsCardManager
          records={records}
          deleteData={deleteData}
          error={error}
          loading={loading}
        />
      </tbody>
    </Table>
  );
};

export default memo(NewsItemsManager);
