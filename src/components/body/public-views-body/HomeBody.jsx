import React from "react";
import ImageSlider from "../../home-components/ImageSlider";
import TextArea from "../../home-components/TextArea";
import NewsContainer from "../../home-components/NewsContainer";

const HomeBody = () => {
  return (
    <div>
      <ImageSlider />
      <TextArea />
      <NewsContainer
        display={false}
        title={"Read all news 👌 "}
        content={
          "Here you will find all the exclusive news and events taking place within the organization"
        }
      />
    </div>
  );
};

export default HomeBody;
