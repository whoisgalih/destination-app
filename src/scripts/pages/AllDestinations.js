import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

import '../../styles/pages/AllDestinations.css';
import '../../styles/components/ErrorFetch.css';
import DestinationItem from '../components/DestinationItem';
import Spinner from '../components/Spinner';

class AllDestinations extends Component {
  constructor(props) {
    super(props);
    this.sizer = createRef();

    this.state = {
      destinations: [],
      success: null,
      width: 0,
      ready: false,
    };
  }

  async deleteDestination(id) {
    let response = await fetch(`${process.env.REACT_APP_BACKEND_BASE}/destinations/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  }

  async getData() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE}/destinations`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const json = await response.json();

    return json.data;
  }

  updateDimension() {
    this.setState({
      width: this.sizer.current.offsetWidth,
    });
  }

  async componentDidMount() {
    try {
      const destinations = await this.getData();
      this.setState(
        {
          destinations,
          success: true,
        },
        () => {
          this.updateDimension();
          window.addEventListener('resize', () => {
            this.updateDimension();
          });
        }
      );
    } catch (error) {
      this.setState({
        success: false,
      });
    }
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
            <Link className="add-destination-button" to={`/destinations/add`}>
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
        {this.state.success === null ? (
          <Spinner />
        ) : this.state.success === false ? (
          <div className='error-fetch'>
            <p className='text-secondary fs-5'>Error while sending request to server</p>
          </div>
        ) : (
          <div>
            <Masonry
              breakpointCols={{
                default: 3,
                992: 2,
                576: 1,
              }}
              className='destination-list'
              columnClassName='destination-list-item'
            >
              <div ref={this.sizer} key='ws1' className='white-space'></div>
              {this.state.destinations.map((destination) => (
                <DestinationItem
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  description={destination.description}
                  image={destination.image}
                  deleteCallback={async (id) => {
                    try {
                      await this.deleteDestination(id);
                      const destinations = await this.getData();

                      this.setState({
                        destinations,
                      });
                    } catch (error) {
                      this.setState({
                        success: false,
                      });
                    }
                  }}
                />
              ))}
            </Masonry>
            <style>{`
              .destination-item > .header > .image {
                height: ${this.state.width}px;
              }
            `}</style>
          </div>
        )}
      </div>
    );
  }
}

export default AllDestinations;
