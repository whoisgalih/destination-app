import React, { Component } from 'react';
import NavBar from './scripts/components/NavBar';
import { Routes, Route } from 'react-router-dom';

// css
import './App.css';

// Page
import Home from './scripts/pages/Home';
import Destinations from './scripts/pages/Destinations';
import AboutUs from './scripts/pages/AboutUs';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/destination/add' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </div>
    );
  }
}

export default App;
