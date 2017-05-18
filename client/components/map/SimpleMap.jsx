import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class SimpleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLat: "",
      currentLon: "",
      startLat: "",
      startLon: "",
      endLat: "",
      endLon: ""
    };

    this.props.fetchIPData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentLat: nextProps.ipData.lat,
      currentLon: nextProps.ipData.lon,
    });

    if (nextProps.location.startLocation) {
      this.setState({
        startLat: nextProps.location.startLocation.location.lat,
        startLon: nextProps.location.startLocation.location.lng,
      });
    }

    if (nextProps.location.endLocation) {
      this.setState({
        endLat: nextProps.location.endLocation.location.lat,
        endLon: nextProps.location.endLocation.location.lng,
      });
    }
  }

  placeStartMarker() {
    if (this.state.startLat && this.state.startLon) {
      return (
        <Layer
          type="symbol"
          id="startMarker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[this.state.startLon, this.state.startLat]}/>
        </Layer>
      );
    }
  }

  placeLine() {
    if (this.state.endLat && this.state.endLon) {
      return (
        <Layer
          type="line"
          id="line">
          <Feature coordinates={[
              [this.state.startLon, this.state.startLat],
              [this.state.endLon, this.state.endLat]]}/>
        </Layer>
      );
    }
  }

  placeEndMarker() {
    if (this.state.endLat && this.state.endLon) {
      return (
        <Layer
          type="symbol"
          id="endMarker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[this.state.endLon, this.state.endLat]}/>
        </Layer>
      );
    }
  }

  render() {
    if (!this.state.currentLat || !this.state.currentLon) return null;

    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v9"
        center={[this.state.currentLon, this.state.currentLat]}
        zoom={[12]}
        accessToken="pk.eyJ1IjoiY2hyYWJ5cmQiLCJhIjoiY2oyaDIycnhqMDA0dTM5bGd0MHNrOWJuOCJ9.7wmnxCdcgVlBv76PRmkEaQ"
        containerStyle={{
          height: "500px",
          width: "500px"
        }}>
        {this.placeStartMarker()}
        {this.placeEndMarker()}
        {this.placeLine()}
      </ReactMapboxGl>
    );
  }
}
