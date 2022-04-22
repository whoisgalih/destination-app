import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

class Home extends Component {
  render() {
    return (
      <div className='container-xxl custom-padding'>
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='whaaattt??????' 
          title='Destination App' 
          subtitle='Place to explore destinations in the world'
        />
      </div>
    );
  }
}

export default Home;
