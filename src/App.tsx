import React, { useEffect, useState } from 'react';
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
  const [showResume, setShowResume] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false)
    }, 3000)
  }, [])
  return (
    <>
      <div className='main-color '>
        {showSpinner ?
        <div className='text-center mh100 d-flex align-items-center justify-content-center'>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        :
        <>
        {showResume ? <Resume Onclose={() => setShowResume(false)} /> :
          <>
            <SocialShareMenu />
            <Email />
            <Header showResume={showResume} setShowResume={setShowResume} />
            <HeroSection />
            <AboutMe />
            <Work />
            <OtherProjects />
            <GetInTouch />
            <Footer />
          </>
        }
</>}


      </div>
    </>
  );
}

export default App;
