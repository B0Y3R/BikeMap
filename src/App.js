import React from 'react';
import Map from './Components/Map';
import './App.css';
 
class App extends React.Component {
 
  render() {
    return (
      
      

      <div className="container">

    
      
        <div className="tablet">

        <div className="camera"></div>

        <Map />
        
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

export default App;

