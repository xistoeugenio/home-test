import React, { ChangeEvent, LabelHTMLAttributes } from "react";
import { toast } from "react-hot-toast";
import useUsers from "@/hooks/useUsers";
import axios from "axios";
import styles from "../styles/home.module.css";

interface UploadButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
  query: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ query, ...props }) => {
  const { mutate } = useUsers(query);

  // Handle file upload to the server
  const handleFileUpload = async (file: File) => {
    try {
      await axios.post(
        "http://localhost:8800/api/files",
        { file: file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Upload successful");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, verify your file and try again");
    }
  };

  // Handle file change event
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return null;
    }

    if (event.target.files[0]?.type !== "text/csv") {
      toast.error("This file must be in CSV format");
    } else {
      await handleFileUpload(event.target.files[0]);
    }

    setTimeout(mutate, 2000);
    event.target.value = "";
  };

  return (
    <label {...props}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <span className={styles.UploadButton}>Upload CSV</span>
    </label>
  );
};

export default UploadButton;
