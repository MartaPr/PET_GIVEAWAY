import React, { Component } from 'react';
import './components/styles/styles.css';

import Routs from './components/navigation/Routs';
import Header from './components/features/Header';
import Footer from './components/features/Footer';

class App extends Component {
  render() {
    
    return (
      
      <React.Fragment>
         <Header/> 
         <Routs/>
         <Footer/>
     </React.Fragment>
        
    );
  }
}

export default App;
