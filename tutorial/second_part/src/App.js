// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import NavBar from './views/navbar';
import Counters from './views/counters';
class App extends Component {
  state = {
    counters: [
      {
        index: 1, value: 0
      },
      { index: 2, value: 0 },
      { index: 3, value: 0 },
      { index: 4, value: 0 },


    ]
  }
  onDelete = id => {
    console.log("Even Handler Called %d", id)
    const counters = this.state.counters.filter(c => c.index !== id);
    this.setState({ counters })
    console.log("counters: %d", this.state.counters)

  }

  handleReset = () => {
    const counterReset = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counterReset })
  }
  onIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters })
  }
  render() {
    return (
      <React.StrictMode>
        <NavBar counters={this.state.counters} />
        <main className='container'>
          <Counters counters={this.state.counters} handleReset={this.handleReset} onIncrement={this.onIncrement} onDelete={this.onDelete} />
        </main>
      </React.StrictMode>
    )
  }
}
export default App;
