import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hader from './components/Hader';
import Footer from './components/Footer';
import Deals from './components/Deals';
import './App.css'
import FreightQuote from './components/FreightQuote';

function Taramtow () {
  return (
    <>
      <Hader />
      <FreightQuote/>
      <Deals/>
      <Footer />
    </>
  );
}

export default Taramtow;
