import React, { useEffect, useState } from 'react';

const ConfirmDialog = (props) => {

  const [classCss, setClassCss] = useState("alert alert-dismissible fade show alert-");
  useEffect(() => {
      setClassCss(classCss.concat(props.type));
  }, []);

  return (
    <div className="modal fade dialogbox" id={props.id} data-backdrop="static" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{props.title}</h5>
            </div>
            <div className="modal-body">
                {props.mensage}
            </div>
            <div className="modal-footer">
                <div className="btn-inline">
                    <div  className="btn btn-text-primary" data-dismiss="modal" onClick={props.confirm} >SIM</div>
                    <div  className="btn btn-text-secondary" data-dismiss="modal" onClick={props.cancel} >NÃO</div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ConfirmDialog;