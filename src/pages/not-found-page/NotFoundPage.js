import React from 'react';
import { isMobile } from 'react-device-detect';

const NotFoundPage = (props) => {

 // useEffect(() => {
  //  console.log(props);
  //}, []);
  return (
    <div >

      <div id="appCapsule" >
        <div className="error-page">
          <div className="icon-box text-danger">
            <ion-icon name="alert-circle"></ion-icon>
          </div>
          <h1 className="title">404</h1>
          <div className="text mb-5">
            Desculpe, esta página não está disponível
          </div>

          <div  className={!isMobile ? 'container' : ''}>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div  className="btn btn-secondary btn-lg btn-block mt-1" onClick={()=>{ window.history.back() }}>Voltar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
