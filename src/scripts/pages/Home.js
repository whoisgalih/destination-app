import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';

import '../../styles/components/ButtonArea.css';

class Home extends Component {
  render() {
    return (
      <div className='container-xxl custom-padding'>
        {/* prettier-ignore */}
        <PageTitle
          sectionName='whaaattt??????' 
          title='Destination App' 
          subtitle='Place to explore destinations in the world'
        > 
          <div className="button-area">
            <Link className="button" to='/destinations'>
              <div className="text-primary">
                Go to Destination Page
              </div>
            </Link>
            <Link className="button" to='/about-us'>
              <div className="text-primary">
               Know More About Us
              </div>
            </Link>
          </div>
        </PageTitle>
      </div>
    );
  }
}

export default Home;
