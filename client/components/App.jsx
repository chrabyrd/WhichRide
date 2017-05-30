import React from 'react';
import Geosuggest from 'react-geosuggest';
import SimpleMapContainer from './map/SimpleMapContainer.js';
import Form from './form/Form.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let startLat, startLon, endLat, endLon;

    if (this.props.location.startLocation.location && this.props.location.endLocation.location) {
      startLat = this.props.location.startLocation.location.lat;
      startLon = this.props.location.startLocation.location.lng;
      endLat = this.props.location.endLocation.location.lat;
      endLon = this.props.location.endLocation.location.lng;
    }

    return(
      <div id="content">
        <Geosuggest
          onSuggestSelect={data => {
            this.props.getStartLocation(data);
          }}/>
        <SimpleMapContainer />
        <Geosuggest
          onSuggestSelect={data => {
            this.props.getEndLocation(data);
          }}/>

        <Form />
        <div style={{width:'100px', height:'100px', background:'green'}} onClick={() => this.props.getUberEstimate(startLat, startLon, endLat, endLon)}></div>
      </div>
    );
  }
}
