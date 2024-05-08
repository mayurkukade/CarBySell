import React from "react";
import { useAddCarImagesMutation } from "../services/dealerAPI";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useDealerIdByCarQuery } from "../services/carAPI";

export default function Uploadimages2() {
  const [images, setImages] = React.useState([]);
  const { id } = useParams();
  const { data } = useDealerIdByCarQuery({ id, pageNo: 0 });
  const lastCarId = data?.list?.length > 0 ? data?.list[data?.list.length - 1].carId : null;
  const [addCarImages] = useAddCarImagesMutation();

  const readImages = async (event) => {
    const files = Array.from(event.target.files);

    const base64Strings = await Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = reader.result.split(",")[1];
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );

    setImages(base64Strings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append each base64 string as a separate "file" part in FormData
    images.forEach((base64String, index) => {
      formData.append(`file${index}`, base64String); // Use a unique key for each file
    });

    try {
      const response = await addCarImages({ formData, lastCarId });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple
          required
          onChange={readImages}
        />
        <div className="mt-5">
          <Button type="submit">Upload Images</Button>
        </div>
      </form>
    </div>
  );
}
