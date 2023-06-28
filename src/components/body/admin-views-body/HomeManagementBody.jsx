import ImageComp from "../../admin-components/home-content-component/image-component/ImageComp";
import TextComp from "../../admin-components/home-content-component/TextComp";
import NewsContainerManager from "../../admin-components/news-component/NewsContainerManager";

const HomeManagementBody = () => {
  return (
    <div>
      <div className="container  ">
        <ImageComp />
        <hr className="rounded" />
        <TextComp />
        <hr className="rounded" />
        <div>
          <NewsContainerManager />
        </div>
        <hr className="rounded" />
      </div>
    </div>
  );
};

export default HomeManagementBody;
