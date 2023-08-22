import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Cover from './Sections/Cover';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;