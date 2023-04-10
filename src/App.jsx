import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <ToastContainer />
    </>

  );
};

export default App;