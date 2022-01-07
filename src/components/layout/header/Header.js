import React, { useEffect } from 'react';
import Search from '../search/Search';


// import Sidebar from '../sidebar/Sidebar';


const Header= (props) => {

  useEffect(() => {
    //document.title = props.title || "Home";
  }, []);

  return (
    <div>
      <div className='appHeader bg-warning scrolled'>
        <div className="left">
          <span  className="headerButton" data-toggle="modal" data-target="#sidebarPanel" target="#sidebarPanel">
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </div>
        <div className="pageTitle">
        {props.title}
        </div>
        <div className="right">
        {/* <span className="headerButton toggle-searchbox">
            <ion-icon name="search-outline"></ion-icon>
          </span>*/}
        </div>
      </div>
      <Search />
    </div>

  );
}

export default Header;