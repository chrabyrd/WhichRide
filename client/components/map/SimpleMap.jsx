import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class SimpleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lon: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({lon: nextProps.ipData.lon, lat: nextProps.ipData.lat});
  }

  render() {
    if (!this.state.lat || !this.state.lon) return null;

    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v9"
        center={[this.state.lon, this.state.lat]}
        zoom={[12]}
        accessToken="pk.eyJ1IjoiY2hyYWJ5cmQiLCJhIjoiY2oyaDIycnhqMDA0dTM5bGd0MHNrOWJuOCJ9.7wmnxCdcgVlBv76PRmkEaQ"
        containerStyle={{
          height: "500px",
          width: "500px"
        }}>
      </ReactMapboxGl>
    );
  }
}
