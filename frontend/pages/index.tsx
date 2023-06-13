import React, { ChangeEvent, useState } from "react";
import styles from "../styles/home.module.css";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import UploadButton from "@/components/UploadButton";
import useUsers from "@/hooks/useUsers";
import { User } from "../types/user";

const FileUploader = () => {
  const [query, setQuery] = useState("");
  const { data: users = [], isLoading, mutate } = useUsers(query);

  return (
    <div className="bg-neutral-800 h-screen flex items-center justify-center">
      <div className={styles.homeContainer}>
        <Navbar setQuery={setQuery} />
        <div className={styles.listCardsContainer}>
          {!isLoading &&
            users?.map((user: User, index: any) => (
              <Card key={index} userInfo={user} />
            ))}
        </div>
        <div className="h-16">
          <UploadButton query={query}/>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
