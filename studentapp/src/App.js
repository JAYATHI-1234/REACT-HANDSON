import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import { Component } from 'react';

class App extends Component
{
  render()
  {
    return(
      <div className='container'>
        <center>
          <Home/>
          <About/>
          <Contact/>
        </center>
      </div>
    )
  }
}

export default App;
