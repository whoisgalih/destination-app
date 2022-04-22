import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

class AboutUs extends Component {
  render() {
    return (
      <div className='container-xxl custom-padding'>
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='About us' 
          title='Know more about us'
        />
        <div>AboutUs</div>
      </div>
    );
  }
}

export default AboutUs;
