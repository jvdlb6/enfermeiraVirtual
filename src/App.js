import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import Loader from './components/layout/loader/Loader';
import Sidebar from './components/layout/sidebar/Sidebar';
import Routes from './routes';


function App() {
  return (
    <Router>
        <Routes />
        <Loader />
        <Sidebar />
        <Normalize />
    </Router>
  );
}

export default App;
