import React from 'react';
import Map from './map/Map.jsx';

export default class App extends React.Component {
  render() {

    return (
      <div style={{height: `500px`}}>
        <Map />
      </div>
    );
  }
}
