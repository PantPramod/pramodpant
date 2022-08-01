import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer';
import Work from './components/Work';
import OtherProjects from './components/OtherProjects';
import SocialShareMenu from './components/SocialShareMenu';
import Resume from './components/Resume';
import Email from './components/Email';

function App() {
  const [showResume , setShowResume]= useState(false);
 
  return (
  <>
  <div className='main-color'> 
  
  {showResume ? <Resume Onclose={()=>setShowResume(false)}/>:
  <>
   <SocialShareMenu/>
   <Email/>
   <Header showResume={showResume} setShowResume={setShowResume}/>
   <HeroSection/>
   <AboutMe/>
   <Work/>
   <OtherProjects/>
   <GetInTouch/>
   <Footer/>
  </>
  }
    
  
   
   </div> 
   </>
  );
}

export default App;
