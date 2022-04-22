import React, { Component } from 'react';
import NavBar from './scripts/components/NavBar';
import { Routes, Route } from 'react-router-dom';

// css
import './App.css';

// Page
import Home from './scripts/pages/Home';
import Destination from './scripts/pages/Destination';
import AllDestinations from './scripts/pages/AllDestinations';
import AboutUs from './scripts/pages/AboutUs';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destinations/:id' element={<Destination />} />
          <Route path='/destinations' element={<AllDestinations />} />
          <Route path='/destination/add' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </div>
    );
  }
}

export default App;
