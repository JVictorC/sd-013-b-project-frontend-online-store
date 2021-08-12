import React from 'react';
import FormProduct from './FormProduct';
import Avaliate from './Avaliate';

export default class AvaliationsArea extends React.Component {
  constructor() {
    super();
    this.state = {
      updated: false,
      avaliações: [],
    };
  }

  avaliateProduct = (rate, email, text) => {
    this.setState((prevState) => ({
      updated: true,
      avaliações: [...prevState.avaliações, { rate, email, text }],
    }));
  };

  render() {
    const { avaliações, updated } = this.state;
    return (
      <div>
        <FormProduct avaliateProduct={ this.avaliateProduct } />
        <Avaliate avaliações={ avaliações } updated={ updated } />
      </div>
    );
  }
}
