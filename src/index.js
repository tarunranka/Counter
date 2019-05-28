import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

class Counter extends Component {
  state = {
    counter: 0,
  };
  increment = e => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };
  decrement = e => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({
        counter: counter - 1,
      });
    }
  };
  reset = e => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <main className="Counter">
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </main>
    );
  }
}

render(<Counter />, document.getElementById('root'));
