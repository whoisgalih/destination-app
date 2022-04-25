import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/ReturnButton.css';

class ReturnButton extends Component {
  render() {
    return (
      <div className='return'>
        <Link className='return' to={this.props.to}>
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
      </div>
    );
  }
}

export default ReturnButton;
