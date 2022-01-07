import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
//import { React, useEffect, useState } from 'react';
import BottomMenu from '../bottom-menu/BottomMenu';
import HeaderBack from '../header-back/HeaderBack';


class LayoutBack extends Component {
  constructor(props,title) {
   super(props);
   document.title = "Enfermeira Virtual | "+this.props.title || document.title;
  }

  render() {
    return (
      <React.Fragment  >
        <div className={!isMobile ? 'container' : ''}>
          <HeaderBack title={this.props.title} ></HeaderBack>
    
          {this.props.children}
          <BottomMenu isMobile={isMobile} />
        </div>

      </React.Fragment>
    )
  }
}

export default LayoutBack;