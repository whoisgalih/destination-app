import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

// css
import './App.css';

// Page
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import AboutUs from './pages/AboutUs';

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
