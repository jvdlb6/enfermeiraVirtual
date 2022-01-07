import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import BottomMenu from '../bottom-menu/BottomMenu';
import Header from '../header/Header';


class LayoutFront extends Component {
  constructor(props) {
    super(props);
    document.title = "Enfermeira Virtual | "+this.props.title || document.title;
 }

  render() {
    return (
      <React.Fragment >
        <div className={!isMobile ? 'container' : ''}>
          <Header title={this.props.title}/>
          {this.props.children}
          <BottomMenu isMobile={isMobile} />
        </div>
      </React.Fragment>
    )
  }
}

export default LayoutFront;