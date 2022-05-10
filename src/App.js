import React, { Component } from 'react';
import './css/style.css';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SectionWithImage from './Components/SectionWithImage';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Navbar />

            <Header />

            <SectionWithImage />

            <Section2 />

            <Section3 />


            <Section4 />

            <Footer />
        </>
    );
}

export default App;
