import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer';
import Work from './components/Work';
import OtherProjects from './components/OtherProjects';
function App() {
  return (
  <>
  <div className='main-color'> 
   <Header/>
   <HeroSection/>
   <AboutMe/>
   <Work/>
   <OtherProjects/>
   <GetInTouch/>
   <Footer/>
   </div> 
   </>
  );
}

export default App;
