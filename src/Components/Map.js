import React from 'react';
import ReactMapGL from 'react-map-gl';
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
 
    state = {
      viewport: {
        width: 600,
        height: 700,
        latitude: 39.7685,
        longitude: -86.1580,
        zoom: 13,
        mapboxApiAccessToken: 'pk.eyJ1IjoiZ29ib3llciIsImEiOiJjamg4Z28xbm0wMXFnMzZ0ZHlqbHY1eHYyIn0.4GyOTtSo-i1WWPi1O8EYKg',
        mapStyle: "mapbox://styles/mapbox/dark-v9",
      }
    };
   
    render() {
      return (
        <div>
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
          />
        </div>
      );
    }
  }
  
  export default Map;