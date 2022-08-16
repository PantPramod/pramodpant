import React, { useEffect, useState } from 'react';
import './App.css';
import {
  AboutMe,
  Header,
  HeroSection,
  GetInTouch,
  Footer,
  Work,
  OtherProjects,
  SocialShareMenu,
  Email,
  Carousal
} from './components';

function App() {

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false)
    }, 3000)
  }, [])

  return (<div className='main-color '>
    {showSpinner ?
      <div className='text-center mh100 d-flex align-items-center justify-content-center'>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      <>
        <SocialShareMenu />
        <Email />
        <Header />
        <HeroSection />
        <AboutMe />
        <Work />
        <OtherProjects />
        <GetInTouch />
        <Carousal />
        <Footer />
      </>}
  </div>);
}

export default App;
