import React from 'react';
import Map from './Map';
import '../_Styles/Body.css';
import R_Sidebox from './R_Sidebox';
 
class Body extends React.Component {
 
  render() {
    return (
      <div className="Main">
        <div className="Container"> 
        <Map />
          <R_Sidebox />          
        </div>
      </div>

    );
  }
}

export default Body;

