import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true
    };
  }

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input
            id="showClock"
            type="checkbox"
            checked={this.state.showClock}
            onChange={this.toggleClock}
          />
          <label htmlFor="showClock">Afficher l'horloge</label>
        </div>
        {
          this.state.showClock ? <Clock /> : 'horloge cachée'
        }
      </div>
    );
  }
}

export default App;
