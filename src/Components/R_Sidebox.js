import React from 'react';
import Legend from './Legend';
import '../_Styles/R_Sidebox.css';


class R_Sidebox extends React.Component {
    render() {
        return (
            <div>
            <div className="R_sidebox">
              <div className="sidebox_banner">Live Stats</div>

              <div className="info_line">Info line 1</div>
              <div className="info_line">Info line 2</div>
              <div className="info_line">Info line 3</div>
  
            </div>
                
            <Legend />

            </div>

            
        )
    }
};

export default R_Sidebox;