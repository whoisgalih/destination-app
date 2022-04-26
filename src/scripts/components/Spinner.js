import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
