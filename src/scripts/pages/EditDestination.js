import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import ReturnButton from '../components/ReturnButton';

import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

class EditDestination extends Component {
  constructor(props) {
    super(props);

    this.destinationName = createRef();
    this.location = createRef();
    this.image = createRef();
    this.website = createRef();
    this.instagram = createRef();
    this.description = createRef();

    this.state = {
      data: {},
      success: null,
    };
  }

  async componentDidMount() {
    const destinationId = window.location.pathname.replace('/destinations/', '').replace('/edit', '');

    await this.getData(destinationId);

    this.destinationName.current.value = this.state.data.name;
    this.image.current.value = this.state.data.image;
    this.location.current.value = this.state.data.location;
    this.website.current.value = this.state.data.website;
    this.instagram.current.value = this.state.data.instagram;
    this.description.current.value = this.state.data.description;
  }

  async getData(id) {
    try {
      const response = await fetch(`https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json = await response.json();

      this.setState({
        data: json,
        success: true,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        data: {},
        success: false,
      });
    }
  }

  async putData() {
    if (this.destinationName.current.value && this.location.current.value && this.location.current.value && this.description.current.value) {
      try {
        const response = await fetch(`https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations/${this.state.data.id}`, {
          method: 'PUT', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.destinationName.current.value,
            image: this.image.current.value,
            location: this.location.current.value,
            website: this.website.current.value,
            instagram: this.instagram.current.value,
            description: this.description.current.value,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.putData();
    this.setState({
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
      if (target.name === 'location') {
        target.className = 'form-control is-invalid';
      }
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
          sectionName='edit destination' 
          title='Edit Destination'
          subtitle={`With id: ${!this.state.data.id? '' : this.state.data.id}`}
        />
        <div className={this.state.success === null ? '' : 'none'}>
          <Spinner />
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)} className={this.state.success === null ? 'none' : ''}>
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
          {this.state.success === false ? <Navigate to='/404' /> : <div></div>}
          {this.state.finish ? <Navigate to={`/destinations/${this.state.data.id}`} /> : <div></div>}
          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    );
  }
}

export default EditDestination;
