import React from 'react';
import Geosuggest from 'react-geosuggest';
import SimpleMapExample from './SimpleMap.jsx';

export default class Map extends React.Component {
  constructor() {
    super();

    this.state = {
      location: ""
    };

    this.getCurrentLocation();
  }

  getCurrentLocation() {
    return (
      navigator.geolocation.getCurrentPosition(pos => {
        this.setState({
          location: [pos.coords.latitude, pos.coords.longitude]
        });
      })
    );
  }

  instantiateMap() {
    if (!this.state.location) return;

    return (
      <SimpleMapExample location={this.state.location} />
    );
  }

  render() {

    return(
      <div>
        <Geosuggest />
        {this.instantiateMap()}
        <Geosuggest />
      </div>
    );
  }
}
