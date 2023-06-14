import "./HomeManagement.css";
import ImageComp from "../../components/admin-components/ImageComp";
import TextComp from "../../components/admin-components/TextComp";
import NewsContainer from "../../components/home-components/NewsContainer";
const HomeManagement = () => {
  return (
    <div>
      <div className="container  ">
        <ImageComp />
        <hr class="rounded" />
        <TextComp />
        <hr class="rounded" />
        <div>
          <h3>Update News Section</h3>
          <NewsContainer />
          <button className="btn btn-dark w-100 mb-4 p-3">Click here to Add new news</button>
        </div>
      </div>
    </div>
  );
};

export default HomeManagement;
