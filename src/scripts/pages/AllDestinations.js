import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

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

    this.getData = this.getData.bind(this);
  }

  async deleteDestination(id) {
    try {
      let response = await fetch(`https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getData() {
    try {
      const response = await fetch('https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations');

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json = await response.json();
      this.setState({
        destinations: json,
        success: true,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        destinations: [],
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
        deleteCallback={async (id) => {
          try {
            await this.deleteDestination(id);
            await this.getData()
          } catch (error) {
            console.log(error)
          }
        }}
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
  }

  componentDidMount() {
    this.getData();

    window.addEventListener('resize', () => {
      this.updateDimension();
    });

    this.updateDimension();

    setTimeout(() => {
      this.updateDimension();
    }, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.updateDimension();
    });
  }

  render() {
    return (
      <div className='container-xxl custom-padding destinations'>
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='Destination' 
          title='Places To Explore' 
          subtitle={`"One day, you'll leave this world behind. So live a life you will remember" ━ Avicii`} 
        >
          <div className="button-area">
            <Link className="add-destination-button" to='/destinations/add'>
              <div className="text-primary">
                Add Destination
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="icon icon-tabler icon-tabler-plus" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="#E72E38" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </Link>
          </div>
        </PageTitle>
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
