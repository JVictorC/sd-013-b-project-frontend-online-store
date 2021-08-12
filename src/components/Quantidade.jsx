import React from 'react';

class Quantidade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleAdd() {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  }

  handleSub() {
    this.setState((prevState) => ({
      total: prevState.total - 1,
    }));
  }

  render() {
    const { total } = this.state;
    return (
      <section name="quantidade">
        <p onChange={ this.handleAdd }>
          { total }
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleAdd }
        >
          +
        </button>

        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleSub }
        >
          -
        </button>
      </section>
    );
  }
}

export default Quantidade;
