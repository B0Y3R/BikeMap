import React from 'react';
import Body from './Components/Body';
import Header from './Components/Header'
import "./App.css";
 
class App extends React.Component {
 
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;

