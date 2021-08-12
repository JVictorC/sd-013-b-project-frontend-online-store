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
      finalPrice: 0,
    };
  }

  componentDidMount() {
    this.updateList();
  }

  handlePrice() {

  }

  clearList() {
    this.setState({ list: [] });
  }

  async updateList() {
    const { cartList } = this.props;
    this.setState({ list: cartList });
  }

  renderList() {
    const { list, finalPrice } = this.state;
    this.setState({ empty: false });
    return (
      <div>
        <h3>Lista de compras:</h3>
        <ul>
          { list.map((product) => <CartItems item={ product } key={ product.id } />) }
        </ul>
        <p>
          { `R$${finalPrice}` }
        </p>
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
        <h1>Shopping Cart</h1>
        { (empty && this.renderEmpty) }
        { (list.length > 0 && this.renderList) }
      </section>
    );
  }
}

Cart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object),
};

Cart.defaultProps = {
  cartList: [],
};
