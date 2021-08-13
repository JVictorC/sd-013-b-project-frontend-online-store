import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartList extends Component {

  render() {
    const { obj, increment, decrement } = this.props
    const {  title, price, quantidade, valueTotal } = obj;
    return (
      <section>
        <div>
          <p data-testid="shopping-cart-product-name">Produto:{ title }</p>
          <span>Valor Unitário:{ price }</span>
          <p data-testid="shopping-cart-product-quantity">quantidade:{ quantidade }</p>
          <p>Valor total de produto:{ valueTotal }</p>
          <button data-testid="product-increase-quantity" onClick={ () => { increment(obj) } }>Aumentar quantidade</button>
          <button data-testid="product-decrease-quantity" onClick={ () => { decrement(obj) } }>Diminuir quantidade</button>
          <button>X</button>
        </div>
      </section>
    );
  }
}

CartList.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantidade: PropTypes.number,
    valueTotal: PropTypes.number,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
export default CartList;