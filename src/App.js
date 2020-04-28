import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ConceptImg from './components/ConceptImg/ConceptImg';
import Information from './components/Information/Information';
import Business from './components/Business/Business';
import Company from './components/Company/Company';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

class App extends Component {
  
    root= {
      backgroundColor: 'rgb(214, 219, 219)',
  }
    
  render(){
    return (
      <div style={this.root}>
        <Navigation />
        <ConceptImg /> 
        <Information />
        <Company />
        <Business />
        {/* <Recruit /> */}
        <Contact />
        {/* <Fab /> */}
        <Footer />
      </div>
    )
  }
}

export default App;
