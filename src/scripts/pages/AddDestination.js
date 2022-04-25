import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import ReturnButton from '../components/ReturnButton';

import '../../styles/pages/AddDestination.css';

class AddDestination extends Component {
  constructor(props) {
    super(props);

    this.destinationName = createRef();

    this.state = {};
  }

  async postData() {
    const state = this.state;

    if (state['destination-name'] && state.location && state.description) {
      const response = await fetch('https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: state['destination-name'],
          location: state.location,
          website: state.website,
          instagram: state.instagram,
          description: state.description,
        }),
      });

      return response;
    }

    return null;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const response = await this.postData();
    console.log(response.status);
    console.log(response.json());
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  textValidator(event) {
    const target = event.target;
    const value = target.value;

    this.handleInputChange(event);
    if (value.length > 2) {
      target.className = 'form-control is-valid';
    } else {
      target.className = 'form-control is-invalid';
    }
  }

  urlValidator(event) {
    const target = event.target;
    const value = target.value;

    if (value.length > 2 && this.isValidHttpUrl(value)) {
      this.handleInputChange(event);
      target.className = 'form-control is-valid';
    } else {
      const name = target.name;
      this.setState({
        [name]: '',
      });
      target.className = 'form-control is-invalid';
    }
  }

  isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  }

  render() {
    return (
      <div className='container-xxl custom-padding add-destination'>
        <ReturnButton to='/destinations' />
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='add destination' 
          title='Add a Destination' 
        />
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='mb-3'>
            <label className='form-label'>Destination Name</label>
            <input
              type='text'
              className='form-control'
              name='destination-name'
              ref={this.destinationName}
              placeholder='Destination Name'
              required='required'
              onChange={(event) => {
                this.textValidator(event);
              }}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Location</label>
            <input
              type='text'
              className='form-control'
              name='location'
              placeholder='Location'
              required
              onChange={(event) => {
                this.urlValidator(event);
              }}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Website</label>
            <input
              type='text'
              className='form-control'
              name='website'
              placeholder='Website'
              onChange={(event) => {
                this.urlValidator(event);
              }}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Instagram</label>
            <input
              type='text'
              className='form-control'
              name='instagram'
              placeholder='Instagram'
              onChange={(event) => {
                this.urlValidator(event);
              }}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Description</label>
            <textarea
              placeholder='Description'
              className='form-control'
              name='description'
              rows='5'
              required
              onChange={(event) => {
                this.textValidator(event);
              }}
            ></textarea>
          </div>
          <div className='button-area'>
            <button className='add-destination-button'>
              <div className='text-primary'>Submit</div>
            </button>
          </div>
          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    );
  }
}

export default AddDestination;
