import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TrustedBy from './sections/TrustedBy';
import Services from './sections/Services';
import OurWork from './sections/OurWork';
import Teams from './sections/Teams';
import ContactUs from './sections/ContactUs';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  );
  return (
    <>
      <div className="dark:bg-black relative">
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
      </div>
    </>
  );
};

export default App;
