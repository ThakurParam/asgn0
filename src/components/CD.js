import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Count: {this.state.count}</h1>
        </div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

function CounterDisplay(props) {
  return (
    <div>
      <h2>here the count will shown 
        : {props.count}</h2>
    </div>
  );
}

function CD() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default CD;