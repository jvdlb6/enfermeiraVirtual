import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AlertMensage from '../../components/alert-mensage/AlertMensage';
import ConfirmDialog from '../../components/confirm-dialog/ConfirmDialog';
import ProgressBar from '../../components/progress/ProgressBar';
import ProgressCicle from '../../components/progress/ProgressCicle';


const Home = (props) => {

  const toastSuccess = () => toast.success('Mensagem de sucesso');
  const toastInfo = () => toast.info('Mensagem de Informação');
  const toastError = () => toast.error('Mensagem de error');
  const toastWarning = () => toast.warning('Mensagem de warning');

  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  const [completed, setCompleted] = useState(0);

  const [pause, setPause] = useState(false)
  const [innerVar, setInnerVar] = useState(false)
  const [outerVar, setOuterVar] = useState(false)
  useEffect(() => {

    setOuterVar(pause);
    const interval = setInterval(function () {
      setCompleted(completed => completed + 10 <= 100 ? completed + 10 : 0);
      setInnerVar(pause)

    }, 2000);

    return () => { clearInterval(interval); };
  }, [pause]);


  function clickConfirm() {
    toast.success('clickConfirm');
  }

  function clickCancel() {
    toast.error('clickCancel');
  }


  // ProgressCicle
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
    const randomProgressColor = randomColor();
    setColor(randomProgressColor);
  }

  const onChange = e => {
    if (e.target.value) {
      if (e.target.value > 100) {
        progress = 100;
      }
      if (e.target.value < 0) {
        progress = 0;
      }
      setProgress(progress);
      const randomProgressColor = randomColor();
      setColor(randomProgressColor);
    } else {
      setProgress(0);
    }
  }
  // |ProgressCicle



  return (
    <div>
      <div id="appCapsule">
        <div className="header-large-title">
          <h1 className="title">Discover</h1>
          <h4 className="subtitle">Welcome to Mobilekit</h4>
        </div>

        <div className="section mt-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Progress</h5>

              <div className="row">
                <div className="col-12">
                  {testData.map((item, idk) => (
                    <ProgressBar key={idk} bgcolor={item.bgcolor} completed={item.completed} className="mt-2" />
                  ))}

                  <div className="mt-2">
                    <ProgressBar bgcolor={"#1E74FD"} completed={completed} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <ProgressCicle
                    progress={progress}
                    size={250}
                    strokeWidth={15}
                    circleOneStroke='#d9edfe'
                    circleTwoStroke={color}
                  />
                </div>
                <div className="col-12">
                  <button onClick={randomProgressValue} className="btn btn-block btn-primary">
                    Random
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="section mt-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">AlertMensage</h5>
              <AlertMensage title="AlertMensage" mensage="AlertMensage" type="info" />
              <AlertMensage title="AlertPrimary" mensage="AlertPrimary" type="primary" />
              <AlertMensage title="AlertWarning" mensage="AlertWarning" type="warning" />
              <AlertMensage title="AlertDanger" mensage="AlertDanger" type="danger" />
              <AlertMensage title="AlertSuccess" mensage="AlertSuccess" type="success" />
              <AlertMensage title="AlertSecondary" mensage="AlertSecondary" type="secondary" />
            </div>
          </div>
        </div>

        <div className="section mt-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Toast</h5>
              <ul className="listview link-listview">
                <li>
                  <Link to="#" onClick={toastSuccess}>
                    Success
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={toastInfo}>
                    Info
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={toastError}>
                    Error
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={toastWarning}>
                    Warning
                  </Link>
                </li>
                <ToastContainer />
              </ul>

            </div>
          </div>
        </div>

        <div className="section mt-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Confirm Dialog </h5>
              <ul className="listview link-listview">
                <li>
                  <Link to="#" data-toggle="modal" data-target="#DialogBasic">
                    Confirm
                  </Link>
                </li>
                <li>
                  <Link to="#" data-toggle="modal" data-target="#DialogBasic2">
                    Confirm 2
                  </Link>
                </li>
                <ConfirmDialog id="DialogBasic" mensage="This is a dialog message" title="Dialog title" confirm={clickConfirm} cancel={clickCancel} />
                <ConfirmDialog id="DialogBasic2" mensage="This is a dialog message 2" title="Dialog title 2" confirm={clickConfirm} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
