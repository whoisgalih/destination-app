import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import ReturnButton from '../components/ReturnButton';
import { Navigate } from 'react-router-dom';

import '../../styles/pages/AddDestination.css';

class AddDestination extends Component {
  constructor(props) {
    super(props);

    this.destinationName = createRef();
    this.location = createRef();
    this.image = createRef();
    this.website = createRef();
    this.instagram = createRef();
    this.description = createRef();

    this.state = {};
  }

  async postData() {
    if (this.destinationName.current.value && this.location.current.value && this.location.current.value && this.description.current.value) {
      try {
        const response = await fetch('https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.destinationName.current.value,
            image: this.location.current.value,
            location: this.location.current.value,
            website_url: this.website.current.value,
            instagram_url: this.instagram.current.value,
            description: this.description.current.value,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();
        return json.id;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const id = await this.postData();
    this.setState({
      id,
      finish: true,
    });
  }

  textValidator(event) {
    const target = event.target;
    const value = target.value;

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
        <ReturnButton to={`/destinations`} />
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
            <label className='form-label'>Image Url</label>
            <input
              type='text'
              className='form-control'
              name='image'
              ref={this.image}
              placeholder='Image Url'
              required
              onChange={(event) => {
                this.urlValidator(event);
              }}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Location Url</label>
            <input
              type='text'
              className='form-control'
              name='location'
              ref={this.location}
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
              ref={this.website}
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
              ref={this.instagram}
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
              ref={this.description}
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
          {this.state.finish ? <Navigate to={`/destinations/${this.state.id}`} /> : <div></div>}
        </form>
      </div>
    );
  }
}

export default AddDestination;
