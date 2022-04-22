import React, { Component } from 'react';
import DataSource from '../data/DataSource';

class Destination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: null,
      data: null,
    };
  }

  async getData(id) {
    try {
      const data = await DataSource.fetchJSON(`https://62612173f429c20deb9b3ddb.mockapi.io/api/destinations/${id}`);
      this.setState({
        data,
        success: true,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        data: null,
        success: false,
      });
    }
  }

  componentDidMount() {
    const destinationId = window.location.pathname.replace('/destinations/', '');

    console.log(destinationId);

    this.getData(destinationId);
  }

  render() {
    console.log(this.state.data);
    return <div></div>;
  }
}

export default Destination;
