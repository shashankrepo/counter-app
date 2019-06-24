import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    counter: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 7 },
      { id: 4, value: 2 }
    ],
    addCounter: id => {
      const counter = [...this.state.counter];
      const index = counter.findIndex(c => c.id === id);
      counter[index].value = counter[index].value + 1;
      this.setState({ counter });
    },
    minusCounter: id => {
      const counter = [...this.state.counter];
      const index = counter.filter(c => c.id === id);
      index[0].value = index[0].value - 1;
      this.setState({ counter });
    },
    deleteCounter: id => {
      const counter = this.state.counter.filter(c => c.id !== id);
      this.setState({ counter });
    },
    resetCounter: () => {
      const counter = [...this.state.counter];
      counter.forEach(c => (c.value = 0));
      this.setState({ counter });
    }
  };
  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
