import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHomeImage } from "../../store/Home/images/homeImageSlice";
import Check from "../../utils/guard/load/Check";
const ImageSlider = () => {
  const { loading, error, records } = useSelector((state) => state.homeimage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHomeImage());
  }, [dispatch]);

  const data = records?.map((ele) => {
    console.log(ele);
    return (
      <Carousel.Item key={ele?.image_id}>
        <img
          className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
          width={800}
          height={400}
          src={ele?.image_data?.secure_url}
          alt="img"
        />
      </Carousel.Item>
    );
  });

  return (
    <Check loading={loading} error={error}>
      <div className=" border-top border-3">
        <div className="container-xl">
          <div className="row ">
            <div className="col-sm-12">
              <h3> </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>{data}</Carousel>
            </div>
          </div>
        </div>
      </div>
    </Check>
  );
};

export default ImageSlider;
