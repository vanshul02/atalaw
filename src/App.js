import React from 'react';

// import component
import useDisclaimer from "./hooks/useDisclaimer";
import DisclaimerModal from "./components/DisclaimerModal";
import Banner from './components/Banner'
import Skills from './components/Skills';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const { showModal, handleAgree, handleDisagree } = useDisclaimer();

  return (
    <div className="relative">
      <div className={showModal ? "pointer-events-none" : ""}>
        <Banner />
        <Skills />
        <Newsletter />
        <Contact />
        <Footer />
      </div>

      {showModal && (
        <DisclaimerModal onAgree={handleAgree} onDisagree={handleDisagree} />
      )}
    </div>
  )
};

export default App;
