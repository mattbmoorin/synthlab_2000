import React, { Component } from 'react';

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      char: 0,
    };
  }

  updateLength = (e) => {
    this.setState({ char: e.target.value.length });
  };

  incrementCounter = () => {
    // this.setState({ counter: this.state.counter + this.state.char });

    console.log('a');

    fetch('http://localhost:3001/presets')
      .then((resp) => {
        console.log('b', resp);
        return resp.json();
      })
      .then((data) => console.log('c', data));

    console.log('d');

    // a, d, b, c
  };

  render() {
    return (
      <>
        <div>{this.state.counter}</div>
        <input onChange={this.updateLength}></input>
        <button onClick={this.incrementCounter}>click me</button>
      </>
    );
  }
}

export default Incrementer;
