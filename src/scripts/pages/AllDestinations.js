import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import DataSource from '../data/DataSource';
import Masonry from 'react-masonry-css';

import '../../styles/pages/AllDestinations.css';
import DestinationItem from '../components/DestinationItem';

class AllDestinations extends Component {
  constructor(props) {
    super(props);
    this.sizer = createRef();

    this.state = {
      destinations: [],
      success: null,
      width: 0,
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
    let jsx = this.state.destinations.map((destination) =>
      // prettier-ignore
      <DestinationItem 
        key={destination.id}
        id={destination.id} 
        name={destination.name} 
        description={destination.description} 
        image={destination.image}
      />
    );

    jsx.splice(0, 0, <div ref={this.sizer} className='white-space-1'></div>);
    jsx.splice(2, 0, <div className='white-space-2'></div>);

    return jsx;
  }

  updateDimension() {
    this.setState({
      width: this.sizer.current.offsetWidth,
    });
    console.log(this.state.width);
  }

  componentDidMount() {
    this.getData();

    window.addEventListener('resize', () => {
      this.updateDimension();
    });

    this.updateDimension();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.updateDimension();
    });
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
        <Masonry
          breakpointCols={{
            default: 3,
            992: 2,
            576: 1,
          }}
          className='destination-list'
          columnClassName='destination-list-item'
        >
          {this.destinationsJSX()}
        </Masonry>
        <style>{`
          .destination-item > .header > .image {
            height: ${this.state.width}px;
          }
        `}</style>
      </div>
    );
  }
}

export default AllDestinations;
