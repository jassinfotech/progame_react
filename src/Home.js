import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Hader from './components/Hader';
import './App.css'
import HeroSlider from './components/HeroSlider';
import SingleServices from './components/SingleServices';
import Shipments from './components/Shipments';
import Taram from './components/Taram';
import RightSingleService from './components/RightSingleService';
import LeftSingleServices from './components/LeftSingleServices';
import ClintLogo from './components/ClintLogo';
import NewsEvents from './components/NewsEvents';
import Footer from './components/Footer';
import Insights from './components/Insights';
import LogisticsPlatform from './components/LogisticsPlatform';
function Home() {
  return (
    <>
      <Hader />
      <HeroSlider/>
      <SingleServices/>
      <Shipments/>
      <Taram/>
      <RightSingleService/>
      <LeftSingleServices/>
      <RightSingleService/>
      <ClintLogo/>
      <NewsEvents/>
      <Insights/>
      <LogisticsPlatform/>
      <Footer/>
    </>
  );
}

export default Home;
