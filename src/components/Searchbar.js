import React, {useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretDown} from "react-icons/ai";
const Searchbar = () => {
    const [display,setDisplay] = useState("hidden")
  return (
    <div className="flex justify-between px-10 text-white md:hidden lg:hidden pt-5">
      <div>Events</div>

      <div className="flex gap-10 items-center  md:hidden lg:hidden">
      <div>
        <AiOutlineSearch />
      </div>
      
      <div className="border border-white flex items-center px-5 gap-3">
      <h1>All</h1>
      <AiFillCaretDown />
      </div>
</div>

      </div>
  )
};

export default Searchbar;
