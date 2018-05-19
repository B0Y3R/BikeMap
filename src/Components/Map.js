import React from 'react';
import ReactMapGL from 'react-map-gl';
import '../_Styles/Map.css'
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
 
    state = {
      viewport: {
        width: 1100,
        height: 700,
        latitude: 39.7685,
        longitude: -86.1580,
        zoom: 13,
        optionsInteractive: false,
        mapboxApiAccessToken: 'pk.eyJ1IjoiZ29ib3llciIsImEiOiJjamg4Z28xbm0wMXFnMzZ0ZHlqbHY1eHYyIn0.4GyOTtSo-i1WWPi1O8EYKg',
        mapStyle: "mapbox://styles/goboyer/cjhdm75ec0a0n2spidock36i2",
      },
    };
    
   
   
    render() { 
      return (
        <div className="Map">
          <ReactMapGL {...this.state.viewport}/>
        </div>
      );
    }
  }
  
  export default Map;