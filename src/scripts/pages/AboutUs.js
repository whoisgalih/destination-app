import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

import Alfian from '../../assets/image/1588562202489.jpg';
import Alif from '../../assets/image/IMG-20220422-WA0000.jpg';
import Galih from '../../assets/image/image0.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className='container-xxl custom-padding'>
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='About us' 
          title='Know more about us'
        />
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <div className='card h-100'>
              <img src={Alfian} className='card-img-top' alt='Alfian' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src={Alif} className='card-img-top' alt='Alif' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>This is a short card.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src={Galih} className='card-img-top' alt='Galih' />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          S
        </div>
      </div>
    );
  }
}

export default AboutUs;
