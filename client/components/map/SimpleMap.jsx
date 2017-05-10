import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class SimpleMapExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: props.location[0],
      lng: props.location[1]
    };
  }

  render() {
    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v9"
        center={[this.state.lng, this.state.lat]}
        accessToken="pk.eyJ1IjoiY2hyYWJ5cmQiLCJhIjoiY2oyaDIycnhqMDA0dTM5bGd0MHNrOWJuOCJ9.7wmnxCdcgVlBv76PRmkEaQ"
        containerStyle={{
          height: "500px",
          width: "500px"
        }}>
      </ReactMapboxGl>
    );
  }
}
