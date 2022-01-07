import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BottomMenu = (props) => {

    useEffect(() => {
        //console.log(props.isMobile)
      }); 
       
    return (

        <div className={!props.isMobile ? 'container appBottomMenu' : 'appBottomMenu'}>
            <Link to='/' className="item active">
                <div className="col">
                    <ion-icon name="home-outline"></ion-icon>
                </div>
            </Link>
          
            <Link to='/pages' className="item">
                <div className="col">
                    <ion-icon name="layers-outline"></ion-icon>
                </div>
            </Link>
            <div className="item" data-toggle="modal" data-target="#sidebarPanel">
                <div className="col">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </div>
        </div>


    );
}

export default BottomMenu;