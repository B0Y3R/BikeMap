import React from 'react';
import Map from './Map';
import '../_Styles/Body.css';
 
class Body extends React.Component {
 
  render() {
    return (
      <div className="Main">

    
      
        <div className="tablet">
        <Map />

        <div className="R_sidebox">
          <div className="sidebox_banner">Title</div>

          <div className="info_line">Info line 1</div>
          <div className="info_line">Info line 2</div>
          <div className="info_line">Info line 3</div>

        </div>
        </div>

      </div>

    );
  }
}

export default Body;

