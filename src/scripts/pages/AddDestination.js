import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';

class AddDestination extends Component {
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
        {/* prettier-ignore */}
        <PageTitle 
          sectionName='add destination' 
          title='Add a Destination' 
        />
        <form>
          <div class='mb-3'>
            <label class='form-label'>Destination Name</label>
            <input type='text' class='form-control' name='destination-name' placeholder='Destination Name' required='required' />
          </div>
          <div class='mb-3'>
            <label class='form-label'>Location</label>
            <input type='text' class='form-control' name='location' placeholder='Location' required />
          </div>
          <div class='mb-3'>
            <label class='form-label'>Website</label>
            <input type='text' class='form-control' name='website' placeholder='Website' />
          </div>
          <div class='mb-3'>
            <label class='form-label'>Instagram</label>
            <input type='text' class='form-control' name='instagram' placeholder='Instagram' />
          </div>
          <div class='mb-3'>
            <label class='form-label'>Description</label>
            <textarea class='form-control' rows='5' required></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddDestination;
