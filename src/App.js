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
import Error404 from './scripts/pages/Error404';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/destinations/:id' element={<Destination />} />
          <Route exact path='/destinations' element={<AllDestinations />} />
          <Route exact path='/destination/add' element={<Home />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          {/* <Route exact path='/404' element={<Error404 />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
