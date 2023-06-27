import React from "react";
import ImageSlider from "../../home-components/ImageSlider";
import TextArea from "../../home-components/TextArea";
import NewsContainer from "../../home-components/NewsContainer";

const HomeBody = () => {
  return (
    <div>
      <ImageSlider />
      <hr />
      <TextArea />
      <hr />
      <NewsContainer />
      <hr />
    </div>
  );
};

export default HomeBody;
