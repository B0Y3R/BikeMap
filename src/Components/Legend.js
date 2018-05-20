import React from 'react';
import "../_Styles/Legend.css";

class Legend extends React.Component {
    render() {
        return (
            <div className="legend">
                <h1>Legend</h1>
                  <ul>
                      <li className="green"><i className="fas fa-map-marker-alt fa-2x"></i>Bike returned</li>
                      <li className="red"><i className="fas fa-map-marker-alt fa-2x"></i>Bike removed </li>
                 </ul>
                </div>
        )
    }
}

export default Legend;