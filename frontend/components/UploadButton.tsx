import useUsers from "@/hooks/useUsers";
import axios from "axios";
import React, { ChangeEvent, LabelHTMLAttributes } from "react";
import { toast } from "react-hot-toast";
import styles from "../styles/home.module.css";

interface UploadButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
  query: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ query, ...props }) => {
  const { mutate } = useUsers(query);

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
      toast.success("upload successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, verify your file and try again");
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return null;
    }

    if (event.target.files[0]?.type !== "text/csv") {
      toast.error("This file must be in a CSV format");
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
