import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

import Alfian from '../../assets/image/1588562202489.jpg';
import Alif from '../../assets/image/IMG-20220422-WA0000.jpg';
import Galih from '../../assets/image/1646824645076.jpg';

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
                <h5 className='card-title'>Alfian Ananda Putra</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src={Alif} className='card-img-top' alt='Alif' />
              <div className='card-body'>
                <h5 className='card-title'>Alifio Yudhistira Aji Salis</h5>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <img src={Galih} className='card-img-top' alt='Galih' />
              <div className='card-body'>
                <h5 className='card-title'>Galih Akbar Nugraha</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
