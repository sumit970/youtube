import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className="flex  flex-row items-center pr-1 pl-4  justify-center rounded-full sm:border-2 gap-3">
      <input
        type="text"
        name=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        // value={count}
        className="md:pr-[180px] sm:pr-[50px] hidden pt-1 pb-1 items-center sm:flex flex-wrap   outline-none border-r-2"
      />
      <button className=" m-3 hidden sm:block">
        <BsSearch className="" onClick={handleSubmit} />
      </button>
    </div>
  );
};

export default SearchBar;
