import React from 'react';
import Geosuggest from 'react-geosuggest';
import Geocoder from 'react-geocoder';
import SimpleMapContainer from './map/SimpleMapContainer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchIPData();
  }

  render() {
    return(
      <div>
        <Geosuggest
          onSuggestSelect={data => {
            this.props.getStartLocation(data);
            console.log('ho');
          }}/>
        <SimpleMapContainer />
        <Geosuggest
          onSuggestSelect={data => {
            this.props.getEndLocation(data);
            console.log('he');
          }}/>
      </div>
    );
  }
}
