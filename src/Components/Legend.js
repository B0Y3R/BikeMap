import React from 'react';
import "../_Styles/Legend.css";

class Legend extends React.Component {
    render() {
        return (
            <div className="legend">
                  <ul>
                      <li><i className="fas fa-map-marker-alt"></i>Bike In Dock</li>
                      <li><i className="fas fa-map-marker-alt"></i>Empty Dock</li>
                 </ul>
                </div>
        )
    }
}

export default Legend;