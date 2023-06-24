import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addNewImage,
  deleteImage,
  getAllHomeImage,
} from "../../../../store/Home/images/homeImageSlice";
import "./ImageComp.css";
const ImageComp = () => {
  const {records } = useSelector((state) => state.homeimage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHomeImage());
  }, [dispatch]);

  const handleFileChange = (event) => {
    if (records.length >= 3) {
      alert("You Can't Add More Than Three");
      return;
    }
    const file = event.target.files[0];
    dispatch(addNewImage(file))
      .unwrap()
      .then(() => {
        dispatch(getAllHomeImage());
      });
  };

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteImage(id));
    },
    [dispatch]
  );

  const data = records?.map((ele, index) => {
    return (
      <div key={ele.image_id} className="col m-3 image-container ">
        <img
          onClick={() => {
            handleSure(ele.image_id);
          }}
          className="customCube"
          src={ele?.image_data?.secure_url}
          alt="no"
        />
      </div>
    );
  });

  const handleSure = (id) => {
    if (window.confirm("Did you want delete this image ?")) {
      handleDelete(id);
    }
  };

  return (
    <div>
      <div className="m-4">
        <div className="container  w-100">
          <h3> Home Images Slider</h3>
          <p>
            You can change images on the home page in here but it must be
            included three images only click on any image you want to change it
            ℹ️
          </p>
          <div className="row">
            {data}
            <div className="custom-input col m-3">
              <input
                type="file"
                className="btn btn-primary"
                accept="image/*"
                id="imageInput"
                onChange={handleFileChange}
              />
              <label htmlFor="imageInput">
                <button disabled="true" className="btn btn-secondary">
                  <label htmlFor="imageInput" className="file-upload-label">
                    <i className="fas fa-upload"></i> Upload Image
                  </label>
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComp;
