import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHomeImage } from "../../store/Home/images/homeImageSlice";

const ImageSlider = () => {
  const { loading, error, records } = useSelector((state) => state.homeimage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHomeImage());
  }, [dispatch]);

  return (
    <div className=" border-top border-3">
      <div className="container-xl">
        <div className="row ">
          <div className="col-sm-12">
            <h3> </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width={800}
                  height={400}
                  src={records[0].image_data.secure_url}
                  alt="img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width={800}
                  height={400}
                  src={records[1].image_data.secure_url}
                  alt="img"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width={800}
                  height={400}
                  src={records[2].image_data.secure_url}
                  alt="img"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
