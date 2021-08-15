import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CartItems from './CartItems';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.clearList = this.clearList.bind(this);

    this.state = {
      empty: true,
      list: props.list,
      finalPrice: 0,
    };
  }

  componentDidMount() {
    this.checkEmpty();
  }

  checkEmpty() {
    const { list } = this.state;
    if (list.length > 0) {
      this.setState({
        empty: false,
      });
    }
  }

  clearList() {
    this.setState({
      empty: true,
      list: [],
    });
  }

  renderList() {
    const { list, finalPrice } = this.state;
    return (
      <div>
        <h3>Lista de compras:</h3>
        <ul>
          { list.map((product) => <CartItems item={ product } key={ product.id } />) }
        </ul>
        <p>
          { `R$${finalPrice}` }
        </p>
      </div>
    );
  }

  renderEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  render() {
    const { empty } = this.state;
    return (
      <section>
        <h1>Shopping Cart</h1>
        { (empty ? this.renderEmpty() : this.renderList()) }
        <button type="button" onClick={ this.clearList }>X</button>
        <Link to="/">Voltar</Link>
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </section>
    );
  }
}

Cart.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

Cart.defaultProps = {
  list: [],
};
