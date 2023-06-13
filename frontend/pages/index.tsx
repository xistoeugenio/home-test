import React, { ChangeEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8800/api/users",
        { file: selectedFile },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="text-white">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUploader;
