import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import DataSource from '../data/DataSource';
import Masonry from 'react-masonry-css';

import '../../styles/pages/Destinations.css';

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.sizer = createRef();

    this.state = {
      destinations: [],
      success: null,
      imageWidth: 0,
    };
  }

  async getData() {
    try {
      const data = await DataSource.fetchJSON('https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations');
      this.setState({
        destinations: data,
        success: true,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        destinations: null,
        success: false,
      });
    }
  }

  destinationsJSX() {
    let jsx = this.state.destinations.map((destination) => (
      <div className='destination-item' key={destination.id}>
        <div className='header'>
          <div className='image'>
            <img src={destination.image} alt={destination.name} style={{ height: this.state.imageWidth }} />
          </div>
          <div className='bottom-right'>Halllllo</div>
        </div>
        <div className='body'>
          <div className='title fs-4'>{destination.name}</div>
          <div className='description'>{destination.description}</div>
        </div>
      </div>
    ));

    jsx.splice(0, 0, <div ref={this.sizer} style={{ height: '200px' }}></div>);
    jsx.splice(2, 0, <div style={{ height: '100px' }}></div>);

    return jsx;
  }

  updateDimension() {
    this.setState({
      imageWidth: this.sizer.current.offsetWidth,
    });
  }

  componentDidMount() {
    this.getData();

    window.addEventListener('resize', () => {
      this.updateDimension();
    });

    this.updateDimension();
  }

  render() {
    return (
      <div className='container-xxl custom-padding'>
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='Destination' 
          title='Places To Explore' 
          subtitle={`"One day, you'll leave this world behind. So live a life you will remember" ━ Avicii`} 
        />
        <Masonry breakpointCols={3} className='destination-list' columnClassName='destination-list-item'>
          {this.destinationsJSX()}
        </Masonry>
      </div>
    );
  }
}

export default Destinations;
