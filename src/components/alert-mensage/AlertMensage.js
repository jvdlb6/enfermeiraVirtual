import React, { useEffect, useState } from 'react';

const AlertMensage = (props) => {

  const [classCss, setClassCss] = useState("alert alert-dismissible fade show alert-");
  useEffect(() => {
      setClassCss(classCss.concat(props.type));
  }, []);

  return (
    <div className="wide-block pt-2 pb-2">
      <div className={classCss} role="alert">
        <h4 className="alert-title">{props.title}</h4>
        {props.mensage}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <ion-icon name="close"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default AlertMensage;