import Undertext from './components/Undertext'

import { useState } from 'react'
import Galleri from './Components/Galleri'
import MainComponent from './Components/MainComponent'
import Header from './components/Header';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Undertext/>
      <MainComponent/>
      <Galleri/>
      <Footer/>
    </>
  );
}

export default App;
