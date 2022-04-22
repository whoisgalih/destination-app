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
        <Link className='destination-item' to={`/destinations/${this.props.id}`}>
          <div className='header'>
            <div className='image'>
              <img src={this.props.image} alt={this.props.name} style={{ height: this.props.imageHeight }} />
            </div>
            <div className='botton-right'>
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
            </div>
          </div>
          <div className='body'>
            <div className='title fs-4 text-dark'>{this.props.name}</div>
            <div className='description'>{this.props.description}</div>
          </div>
        </Link>
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
