import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { mutate } from "swr";

interface NavbarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const Navbar: React.FC<NavbarProps> = ({ setQuery }) => {

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log("dsbfjasfksahfask");
  };

  
  return (
    <div className=" h-16 flex items-center justify-between">
      <div onClick={()=>{mutate}}>Sample.csv</div>
      <div className="bg-neutral-400 h-9 w-2/4 flex items-center gap-2 p-2 rounded-md">
        <input
          onChange={handleQueryChange}
          type="text"
          className="bg-transparent outline-none flex-1 text-lg"
        />
        <BiSearch className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
