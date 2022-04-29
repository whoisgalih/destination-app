import React, { Component } from 'react';
// import DataSource from '../data/DataSource';
import '../../styles/pages/Destination.css';
import { Navigate, Link } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';
import Spinner from '../components/Spinner';

class Destination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: null,
      data: {},
      social: <div></div>,
    };
  }

  async getData(id) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE}/destinations/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json = await response.json();
      this.setState(
        {
          data: json.data,
          success: true,
        },
        () => {
          this.renderSocial();
          this.renderDescription();
        }
      );
    } catch (e) {
      console.log(e);
      this.setState({
        data: {},
        success: false,
      });
    }
  }

  renderSocial() {
    const social = {
      website: this.state.data.website_url,
      instagram: this.state.data.instagram_url,
      location: this.state.data.location,
    };

    const availableSocial = Object.keys(social).filter((key) => Boolean(social[key]));

    const jsx = {
      website: (link) => (
        <a className='web' href={link} target='blank' key='1'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-world' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='#cecece' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <circle cx='12' cy='12' r='9'></circle>
            <line x1='3.6' y1='9' x2='20.4' y2='9'></line>
            <line x1='3.6' y1='15' x2='20.4' y2='15'></line>
            <path d='M11.5 3a17 17 0 0 0 0 18'></path>
            <path d='M12.5 3a17 17 0 0 1 0 18'></path>
          </svg>
        </a>
      ),
      instagram: (link) => (
        <a className='insta' href={link} target='blank' key='2'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-instagram' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='#cecece' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <rect x='4' y='4' width='16' height='16' rx='4'></rect>
            <circle cx='12' cy='12' r='3'></circle>
            <line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>
          </svg>
        </a>
      ),
      location: (link) => (
        <a className='location' href={link} target='blank' key='3'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-map-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='#cecece' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <line x1='18' y1='6' x2='18' y2='6.01'></line>
            <path d='M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5'></path>
            <polyline points='10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15'></polyline>
            <line x1='9' y1='4' x2='9' y2='17'></line>
            <line x1='15' y1='15' x2='15' y2='20'></line>
          </svg>
        </a>
      ),
    };

    const result = availableSocial.map((link) => jsx[link](social[link]));

    this.setState({
      social: result,
    });
  }

  async deleteDestination(id) {
    try {
      let response = await fetch(`${process.env.REACT_APP_BACKEND_BASE}/destinations/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      this.setState({
        finish: true,
      });
    } catch (error) {
      window.alert('gagal menghapus data');
      this.setState({
        finish: false,
      });
    }
  }

  renderDescription() {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        description: prevState.data.description.split('\n').map((str, i) => <p key={i}>{str}</p>),
      },
    }));
  }

  componentDidMount() {
    const destinationId = window.location.hash.replace('#/destinations/', '');

    this.getData(destinationId);
  }

  render() {
    return (
      <div className='destination-page container-xxl custom-padding'>
        <ReturnButton to={`/destinations`} />
        {this.state.success === null ? (
          <Spinner />
        ) : (
          <div>
            <div className='title'>{this.state.data.name}</div>
            <div className='header'>
              <div className='image'>
                <img src={this.state.data.image} alt='' />
              </div>
              <div className='botton-right'>
                <Link to={`/destinations/${this.state.data.id}/edit`}>
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-pencil' width='16' height='16' viewBox='0 0 24 24' strokeWidth='2' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
                    <line x1='13.5' y1='6.5' x2='17.5' y2='10.5'></line>
                  </svg>
                </Link>
                <div
                  onClick={async () => {
                    await this.deleteDestination(this.state.data.id);
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-trash' width='16' height='16' viewBox='0 0 24 24' strokeWidth='2' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <line x1='4' y1='7' x2='20' y2='7'></line>
                    <line x1='10' y1='11' x2='10' y2='17'></line>
                    <line x1='14' y1='11' x2='14' y2='17'></line>
                    <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path>
                    <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='social'>
              <div>{this.state.social}</div>
            </div>
            <div>{this.state.data.description}</div>
            {this.state.finish ? <Navigate to={`/destinations`} /> : <div></div>}
            {this.state.success === false ? <Navigate to={`/404`} /> : <div></div>}
          </div>
        )}
      </div>
    );
  }
}

export default Destination;
