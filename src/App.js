import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Featured from './components/FeaturedOn';
import Description from './components/description/Description';
import Features from './components/Features';
import Testimonials from './components/testimonials/Testimonials';      
import Email from './components/Email';  
import Footer from './components/Footer' 
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    return(
      <>
      <Header />
      <Hero />
      <Featured />
      <Description />
      <Features />
      <Testimonials />
      <Email />
      <Footer />
      </>
    );
  }
}

export default App;
