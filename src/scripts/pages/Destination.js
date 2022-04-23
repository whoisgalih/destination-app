import React, { Component } from 'react';
import DataSource from '../data/DataSource';
import '../../styles/pages/Destination.css';
import { Link, Navigate } from 'react-router-dom';

class Destination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: null,
      data: {},
    };
  }

  async getData(id) {
    try {
      const data = await DataSource.fetchJSON(`https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations/${id}`);
      this.setState({
        data,
        success: true,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        data: null,
        success: false,
      });
    }
  }

  componentDidMount() {
    const destinationId = window.location.pathname.replace('/destinations/', '');

    this.getData(destinationId);
  }

  render() {
    console.log(this.state.data);
    return (
      <div className='destination-page container-xxl custom-padding'>
        {this.state.data === 'Not found' ? <Navigate to='/404' /> : <div></div>}
        <Link className='return' to='/destinations'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-arrow-narrow-left primary'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='#E72E38'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <line x1='5' y1='12' x2='19' y2='12'></line>
            <line x1='5' y1='12' x2='9' y2='16'></line>
            <line x1='5' y1='12' x2='9' y2='8'></line>
          </svg>
          <div className='text-primary'>Return</div>
        </Link>
        <div className='title'>{this.state.data.name}</div>
        <div className='header'>
          <div className='image'>
            <img src={this.state.data.image} alt='' />
          </div>
          <div className='author'>
            <div className='name'></div>
            <div className='verified'></div>
          </div>
        </div>
        <div className='social'>
          <div>
            <div className='web'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-world' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='#cecece' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <circle cx='12' cy='12' r='9'></circle>
                <line x1='3.6' y1='9' x2='20.4' y2='9'></line>
                <line x1='3.6' y1='15' x2='20.4' y2='15'></line>
                <path d='M11.5 3a17 17 0 0 0 0 18'></path>
                <path d='M12.5 3a17 17 0 0 1 0 18'></path>
              </svg>
            </div>
            <div className='insta'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-brand-instagram'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='#cecece'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <rect x='4' y='4' width='16' height='16' rx='4'></rect>
                <circle cx='12' cy='12' r='3'></circle>
                <line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>
              </svg>
            </div>
            <div className='location'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-map-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='#cecece' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <line x1='18' y1='6' x2='18' y2='6.01'></line>
                <path d='M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5'></path>
                <polyline points='10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15'></polyline>
                <line x1='9' y1='4' x2='9' y2='17'></line>
                <line x1='15' y1='15' x2='15' y2='20'></line>
              </svg>
            </div>
          </div>
        </div>
        <p>{this.state.data.description}</p>
        <div className='other-destinations'>
          <div className='destinations'></div>
        </div>
      </div>
    );
  }
}

export default Destination;
