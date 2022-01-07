import React from 'react';

const HeaderBack = (props) => {
  return (
    <div>
      <div className="appHeader bg-warning text-light">
        <div className="left">
          <div className="headerButton goBack" onClick={()=>{ window.history.back() }}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </div>
        <div className="pageTitle">{props.title}</div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default HeaderBack;