import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

export default class SimpleMapExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.location[0],
      lng: props.location[1]
    };
  }

  simpleMap() {

  }

  render() {
    const SimpleMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
        />
    ));

    return (
      <SimpleMap
        containerElement={
          <div style={{ height: `500px` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}
