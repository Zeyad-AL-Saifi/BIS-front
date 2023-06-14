import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageSlider extends React.Component {
  render() {
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
                    src="https://picsum.photos/500/300?img=2"
                    alt="img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    width={800}
                    height={400}
                    src="https://picsum.photos/500/300?img=1"
                    alt="img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    width={800}
                    height={400}
                    src="https://picsum.photos/500/300?img=3"
                    alt="img"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
