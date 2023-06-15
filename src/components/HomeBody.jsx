import React from "react";
import ImageSlider from "./home-components/ImageSlider";
import NewsContainer from "./home-components/NewsContainer";
import TextArea from "./home-components/TextArea";

const HomeBody = () => {
  return (
    <body>
      <ImageSlider />
      <TextArea />
      <NewsContainer
        title={"Read all new 👌 "}
        content={
          "Here you will find all the exclusive news and events taking place within the organization"
        }
      />
    </body>
  );
};

export default HomeBody;