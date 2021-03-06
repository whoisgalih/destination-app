import React, { Component } from 'react';
import NavBar from './scripts/components/NavBar';
import { Routes, Route } from 'react-router-dom';

// css
import './App.css';

// Page
import Home from './scripts/pages/Home';
import Destination from './scripts/pages/Destination';
import AddDestination from './scripts/pages/AddDestination';
import AllDestinations from './scripts/pages/AllDestinations';
import EditDestination from './scripts/pages/EditDestination';
import AboutUs from './scripts/pages/AboutUs';
import Error404 from './scripts/pages/Error404';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route exact path={`/`} element={<Home />} />
          <Route exact path={`/destinations/add`} element={<AddDestination />} />
          <Route exact path={`/destinations/:id/edit`} element={<EditDestination />} />
          <Route exact path={`/destinations/:id`} element={<Destination />} />
          <Route exact path={`/destinations`} element={<AllDestinations />} />
          <Route exact path={`/about-us`} element={<AboutUs />} />
        </Routes>
      </div>
    );
  }
}

export default App;
