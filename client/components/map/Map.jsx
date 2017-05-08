import React from 'react';
import Geosuggest from 'react-geosuggest';

export default class Map extends React.Component {
  render() {
    return(
      <div>
        <Geosuggest />
        <Geosuggest />
      </div>
    );
  }
}
