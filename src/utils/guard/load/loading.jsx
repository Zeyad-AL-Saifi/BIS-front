import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import "./loading.css";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Loading = () => {
  return (
    <div className="loading-page">
      <ClipLoader color="#000" css={override} size={50} />
      <p> Loading...</p>
    </div>
  );
};

export default Loading;
