import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/components/DestinationItem.css';

class DestinationItem extends Component {
  componentDidUpdate() {
    this.render();
  }

  render() {
    return (
      <div>
        <div className='destination-item'>
          <div className='header'>
            <div className='image'>
              <img src={this.props.image} alt={this.props.name} />
            </div>
            <div className='botton-right'>
              <Link to={`/destinations/${this.props.id}/edit`}>
                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-pencil' width='16' height='16' viewBox='0 0 24 24' strokeWidth='2' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
                  <line x1='13.5' y1='6.5' x2='17.5' y2='10.5'></line>
                </svg>
              </Link>
              <div
                onClick={() => {
                  this.props.deleteCallback(this.props.id);
                }}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-trash' width='16' height='16' viewBox='0 0 24 24' strokeWidth='2' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <line x1='4' y1='7' x2='20' y2='7'></line>
                  <line x1='10' y1='11' x2='10' y2='17'></line>
                  <line x1='14' y1='11' x2='14' y2='17'></line>
                  <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path>
                  <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path>
                </svg>
              </div>
              <Link to={`/destinations/${this.props.id}`}>
                <div className='button-text'>More</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-arrow-narrow-right'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#2c3e50'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <line x1='5' y1='12' x2='19' y2='12' />
                  <line x1='15' y1='16' x2='19' y2='12' />
                  <line x1='15' y1='8' x2='19' y2='12' />
                </svg>
              </Link>
            </div>
          </div>
          <div className='body'>
            <div className='title fs-4 text-dark'>{this.props.name}</div>
            <div className='description'>{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

DestinationItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DestinationItem;
