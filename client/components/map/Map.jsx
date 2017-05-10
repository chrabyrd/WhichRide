import React from 'react';
import Geosuggest from 'react-geosuggest';
import SimpleMapExample from './SimpleMap.jsx';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };

    this.props.fetchIPData();
  }

  componentWillReceiveProps(nextProps) {
    const lat = nextProps.ipData.lat;
    const lon = nextProps.ipData.lon;

    this.setState({location: [lat,lon]});
  }

  instantiateMap() {
    if (!this.state.location) return;

    return (
      <SimpleMapExample location={this.state.location} />
    );
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <Geosuggest />
        {this.instantiateMap()}
        <Geosuggest />
      </div>
    );
  }
}
