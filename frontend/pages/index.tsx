import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import styles from "../styles/home.module.css";
import { User } from "../types/user";
import useUsers from "@/hooks/useUsers";

//components
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import UploadButton from "@/components/UploadButton";
import InitialMessage from "@/components/InitialMessage";


const FileUploader = () => {
  const [query, setQuery] = useState("");
  const { data: users = [], isLoading } = useUsers(query);

  return (
    <div className="bg-neutral-800 h-screen flex items-center justify-center">
      <div className={styles.homeContainer}>
        {/* Navbar */}
        <Navbar setQuery={setQuery} query={query} />
        <div className={styles.listCardsContainer}>
          {/* Loading state */}
          {isLoading ? (
            <div className="flex items-center">
              <ClipLoader color="#0f87ff" size={70} />
            </div>
          ) : users.length > 0 ? (
            // Displaying user cards
            users?.map((user: User, index: any) => (
              <Card key={index} userInfo={user} />
            ))
          ) : query.length > 0 ? (
            // No results found
            <div className="text-white text-lg font-semibold">
              No results found for your search. Please try again.
            </div>
          ) : (
            // Initial message
            <InitialMessage />
          )}
        </div>
        <div className="h-16 flex items-center justify-center">
          {/* Upload button */}
          <UploadButton query={query} className="sm:hidden block" />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
