import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/users",
        { file: selectedFile },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); // Process the response as needed
    } catch (error) {
      console.error("Error uploading file:", error);
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
