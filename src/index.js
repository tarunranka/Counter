import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

class Counter extends Component {
  state = {
    count: 0,
  };
  increment = e => {
    const { counter } = this.state;
    this.setState({
      counter: count + 1,
    });
  };
  decrement = e => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({
        counter: count - 1,
      });
    }
  };
  reset = e => {
    this.setState({
      count: 0,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
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
