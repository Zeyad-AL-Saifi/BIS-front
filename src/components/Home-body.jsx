import React from "react";
import ImageSlider from "./home-components/ImageSlider";
import NewsContainer from "./home-components/NewsContainer";
import TextArea from "./home-components/TextArea";

const HomeBody = () => {
  return (
    <body>
      <ImageSlider />
      <TextArea />
      <NewsContainer />
    </body>
  );
};

export default HomeBody;
