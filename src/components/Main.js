import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form className="form" action="#">
          <input type="text" onChange={this.handleChange} value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
