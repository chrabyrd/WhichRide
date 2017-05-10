import React from 'react';
import Geosuggest from 'react-geosuggest';
import SimpleMapContainer from './map/SimpleMapContainer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchIPData();
  }

  render() {
    return(
      <div>
        <Geosuggest />
        <SimpleMapContainer />
        <Geosuggest />
      </div>
    );
  }
}
