import React from 'react';

function Search() {
  return (
    <div>
      <div id="search" className="appHeader">
        <form className="search-form">
          <div className="form-group searchbox">
            <input type="text" className="form-control" placeholder="Search..." />
            <i className="input-icon">
              <ion-icon name="search-outline"></ion-icon>
            </i>
            <div  className="ml-1 close toggle-searchbox">
              <ion-icon name="close-circle"></ion-icon>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;