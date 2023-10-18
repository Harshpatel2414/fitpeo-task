import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <p>Hello Shahrukh</p>
      <div className='searchbar'>
        <img src="./images/search.svg" alt="search" />
        <input type="text" placeholder='search' />
      </div>
    </div>
  );
};
export default Navbar