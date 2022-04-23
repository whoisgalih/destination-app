import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

class AboutUs extends Component {
  render() {
    return (
      <div className='container-xxl custom-padding'>
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='Error 404' 
          title='Page Not Found'
        />
      </div>
    );
  }
}

export default AboutUs;
