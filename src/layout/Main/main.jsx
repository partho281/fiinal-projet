import React from 'react';
import Header from '../../components/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/Header/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster position="top-right"
  reverseOrder={false}></Toaster>


            <Footer></Footer>
        </div>
    );
};

export default Main;