import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import ImageList from './components/ImageList';
import Navigation from './components/Navigation';

import { disablePageScroll } from 'scroll-lock';

function App() {

  disablePageScroll();

  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const toggleMenu = (bool) => {
    setIsMenuShowing(bool);
  }

  return (<>
          <ImageList toggleMenu={toggleMenu}/>
          <Navigation isMenuShowing={isMenuShowing} toggleMenu={toggleMenu}/>
          </>
  );
}

export default App;
