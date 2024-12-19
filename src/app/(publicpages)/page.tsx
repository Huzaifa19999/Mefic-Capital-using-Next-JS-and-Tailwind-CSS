'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section0 from '../components/Section0';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';

function Home() {
  const [showSection0, setShowSection0] = useState(false);
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection4, setShowSection4] = useState(false);
  const [showSection5, setShowSection5] = useState(false);
  const [showSection6, setShowSection6] = useState(false);

  // UseEffect to trigger fade-in and bounce animations
  useEffect(() => {
    const timeout0 = setTimeout(() => setShowSection0(true), 1000);
    const timeout1 = setTimeout(() => setShowSection1(true), 1200);
    const timeout2 = setTimeout(() => setShowSection2(true), 1400);
    const timeout4 = setTimeout(() => setShowSection4(true), 1600);
    const timeout5 = setTimeout(() => setShowSection5(true), 1800);
    const timeout6 = setTimeout(() => setShowSection6(true), 2000);

    // Clean up timeouts on unmount
    return () => {
      clearTimeout(timeout0);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='bg-white text-black'>
        <Section0 show={showSection0} />
        <Section1 show={showSection1}  />
        <Section2  />
        <Section4/>
        <Section5  />
        <Section6 />
      </div>
      <Footer />
    </>
  );
}

export default Home;
