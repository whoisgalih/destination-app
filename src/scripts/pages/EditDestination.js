import React, { Component, createRef } from 'react';
import PageTitle from '../components/PageTitle';
import ReturnButton from '../components/ReturnButton';

import '../../styles/components/ErrorFetch.css';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

class EditDestination extends Component {
  constructor(props) {
    super(props);

    this.destinationName = createRef();
    this.location = createRef();
    // this.imageFile = createRef();
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
    const destinationId = window.location.hash.replace('#/destinations/', '').replace('/edit', '');

    const data = await this.getData(destinationId);

    this.setState(
      {
        data,
        success: JSON.stringify(data) !== '{}',
      },
      () => {
        this.destinationName.current.value = this.state.data.name;
        this.image.current.value = this.state.data.image;
        this.location.current.value = this.state.data.location;
        this.website.current.value = this.state.data.website_url;
        this.instagram.current.value = this.state.data.instagram_url;
        this.description.current.value = this.state.data.description;
      }
    );
  }

  async getData(id) {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE}/destinations/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json = await response.json();

      return json.data;
    } catch (e) {
      console.log(e);

      return {};
    }
  }

  async putData() {
    if (
      this.destinationName.current.value &&
      // this.state.imageFile &&
      this.image.current.value &&
      this.location.current.value &&
      this.description.current.value
    ) {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE}/destinations/${this.state.data.id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.destinationName.current.value,
          // image: this.state.imageFile,
          image: this.image.current.value,
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

      window.alert(json.message);
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      this.setState({
        isLoading: true,
      });
      await this.putData();
      this.setState({
        finish: true,
      });
    } catch (error) {
      window.alert('Data gagal diupdate');
      this.setState({
        isLoading: false,
      });
    }
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

  toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  // async inputImage(event) {
  //   try {
  //     const file = event.target.files[0];

  //     let base64 = await this.toBase64(file);

  //     base64 = base64.split('base64,')[1];

  //     this.setState({
  //       imageFile: base64,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    return (
      <div className='container-xxl custom-padding add-destination'>
        <ReturnButton to={`/destinations`} />
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='edit destination' 
          title='Edit Destination'
          subtitle={`With id: ${!this.state.data.id? '' : this.state.data.id}`}
        />
        <div className={this.state.success === null ? '' : 'none'}>
          <Spinner />
        </div>
        <div className={this.state.success === false ? '' : 'none'}>
          <div className='error-fetch'>
            <p className='text-secondary fs-5'>Error while sending request to server</p>
          </div>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)} className={this.state.success ? '' : 'none'}>
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
          {/* <div className='mb-3'>
            <label htmlFor='formFile' className='form-label'>
              Image
            </label>
            <input className='form-control' type='file' id='formFile' accept='image/*' onChange={(event) => this.inputImage(event)} />
          </div> */}
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
              <div className='text-primary'>{this.state.isLoading ? <Spinner /> : 'Submit'}</div>
            </button>
          </div>
          {this.state.success === false ? <Navigate to={`/404`} /> : <div></div>}
          {this.state.finish ? <Navigate to={`/destinations/${this.state.data.id}`} /> : <div></div>}
          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    );
  }
}

export default EditDestination;
