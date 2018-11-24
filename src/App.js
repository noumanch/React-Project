import React, { Component } from 'react';
import './index.css';



class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img className="logo" src='./MYtineraryLogo.png'alt=''/>
        </header>
        <div className="App">
        <section>
         <p>Find your perfect trip, designed by the insiders who know and love their city.</p>
         </section>
         <div>
         <h1>Start browsing</h1>
         <img id='circle' src='./circled-right-2.png' alt=''/>
         </div>
         <div>
         <p>Want to build your own MYtinerary</p>
         <p><span>Login CreateAccount</span></p>
         </div>
         <img className='homeicon' src='./homeIcon.png' alt=''/>
        </div>
      </div>
    );
  }
}

export default App;
