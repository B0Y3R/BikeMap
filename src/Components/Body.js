import React from 'react';
import Map from './Map';
import '../_Styles/Body.css';
import R_Sidebox from './R_Sidebox';
import Footer from './Footer';
 
class Body extends React.Component {
 
  render() {
    return (
      <div className="Main">
        
        <div className="Container"> 
          
          <div className="center">
            <Map />
            <R_Sidebox />
           </div>

            <div className="bottom">
            <Footer />
            </div>

        </div>
        
      </div>

    );
  }
}

export default Body;

