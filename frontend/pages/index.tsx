import React, { useState } from "react";
import styles from "../styles/home.module.css";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import UploadButton from "@/components/UploadButton";
import useUsers from "@/hooks/useUsers";
import { User } from "../types/user";
import InitialMessage from "@/components/InitialMessage";
import { ClipLoader } from "react-spinners";

const FileUploader = () => {
  const [query, setQuery] = useState("");
  const { data: users = [], isLoading } = useUsers(query);

  return (
    <div className="bg-neutral-800 h-screen flex items-center justify-center">
      <div className={styles.homeContainer}>
        <Navbar setQuery={setQuery} query={query} />
        <div className={styles.listCardsContainer}>

          {/*This verifies if it's loading, if users's array is empty
             or if 'query' has a valid value*/}

          {isLoading ? (
            <div className="flex items-center">
              <ClipLoader color="#0f87ff" size={70} />
            </div>
          ) : users.length > 0 ? (
            users?.map((user: User, index: any) => (
              <Card key={index} userInfo={user} />
            ))
          ) : query.length > 0 ? (
            <div className="text-white text-lg font-semibold">
              No results found for your search. Please try again.
            </div>
          ) : (
            <InitialMessage />
          )}
        </div>
        <div className="h-16 flex items-center justify-center">
          <UploadButton query={query} className="sm:hidden block " />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
