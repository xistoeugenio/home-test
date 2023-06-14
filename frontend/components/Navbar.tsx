import React, { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";
import UploadButton from "./UploadButton";

interface NavbarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

const Navbar: React.FC<NavbarProps> = ({ setQuery, query }) => {
  // Event handler for query input change
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log("dsbfjasfksahfask");
  };

  return (
    <div className="h-16 flex items-center justify-between">
      {/* Upload button */}
      <UploadButton query={query} className="sm:block hidden" />
      {/* Query input */}
      <div className="bg-neutral-400 h-9 flex-1 max-w-none sm:max-w-[60%] flex items-center gap-2 p-2 rounded-md">
        <input
          onChange={handleQueryChange}
          type="text"
          className="bg-transparent outline-none flex-1 sm:text-xl text-lg"
        />
        <BiSearch className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
