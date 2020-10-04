import React from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Description from './components/Description';
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
      </>
    );
  }
}

export default App;
