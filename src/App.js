import React from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
 
class Map extends React.Component {
 
  state = {
    viewport: {
      width: 600,
      height: 700,
      latitude: 39.7685,
      longitude: -86.1580,
      zoom: 13,
      mapboxApiAccessToken: 'pk.eyJ1IjoiZ29ib3llciIsImEiOiJjamg4Z28xbm0wMXFnMzZ0ZHlqbHY1eHYyIn0.4GyOTtSo-i1WWPi1O8EYKg',
      mapStyle: "mapbox://styles/mapbox/streets-v10",
    }
  };
 
  render() {
    return (

      <div className="container">

    
      
        <div className="tablet">
        <div className="camera"></div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
        <div className="btn"></div>
        </div>

        <div className="R_sidebox">
          <div className="sidebox_banner">
            <div className="title">Title</div>
          </div>

          <div className="info_line">Info line 1</div>
          <div className="info_line">Info line 2</div>
          <div className="info_line_bottom">Info line 3</div>

        </div>


      </div>

    );
  }
}

export default Map;

