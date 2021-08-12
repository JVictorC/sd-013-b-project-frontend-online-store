import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItems from './CartItems';

export default class Cart extends Component {
  constructor() {
    super();

    this.renderList = this.renderList.bind(this);

    this.state = {
      empty: true,
      list: [],
    };
  }

  componentDidMount() {
    this.updateList();
  }

  async updateList() {
    const { cartList } = this.props;
    this.setState({ list: cartList });
    const { list } = this.state;
    list.forEach((item) => this.setState =({ [item.id]: 1 }));
  }

  clearList() {
    this.setState({ list: [] });
  }

  renderList() {
    const { list } = this.state;
    return (
      <div>
        <h3>Lista de compras:</h3>
        <ul>
          { list.map((item) =>
          <CartItems
            { ...item }
            key={ item.id }
          />) }
        </ul>
          <button type="button" onClick={ this.clearList }>X</button>
          <Link to="/">Voltar</Link>
      </div>
    );
  }

  renderEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <Link to="/">Voltar</Link>
      </p>
    );
  }

  render() {
    const { empty, list } = this.state;
    return (
      <section>
        { (empty && this.renderEmpty()) }
        { (list.length > 0 && this.renderList()) }
      </section>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object),
};

Cart.defaultProps = {
  cartList: [],
}
