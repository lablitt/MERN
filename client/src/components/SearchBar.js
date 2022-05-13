import React, { useEffect, useState } from "react";

//has input and is onChange
//send state of letters to patients


const SearchBar = (props) => {

  const handleSearchInput = (e) => {
    e.target.value && props.handleSearchValue(e.target.value);
  }


  return (
    <div>
      <input onChange={handleSearchInput}/>
    </div>

  )
}

export default SearchBar;
