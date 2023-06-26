import { useEffect } from "react";
import { useRef } from "react";
import { Cloud_Name, Upload_Preset } from "../Api/cloudinaryConfig";
import { useState } from "react";

const UploadImageCloud = ({ setImagePath, value }) => {
  const cloudinaryRef = useRef();
  const WidgetRef = useRef();

  const [image, setimage] = useState();
  value = image;
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    WidgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: Cloud_Name,
        uploadPreset: Upload_Preset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const imagePath = result.info.secure_url;
          setimage(imagePath);
          setImagePath(imagePath);
        }
      }
    );
  }, [setImagePath, value]);

  return (
    <div>
      <button
        onClick={() => {
          WidgetRef.current.open();
        }}
      >
        Upload Image
      </button>
    </div>
  );
};

export default UploadImageCloud;
