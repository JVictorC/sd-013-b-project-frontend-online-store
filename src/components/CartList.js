import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartList extends Component {
  render() {
    const { obj, increment, decrement } = this.props;
    const { title, price, quantidade, valueTotal } = obj;
    return (
      <section>
        <div>
          <p data-testid="shopping-cart-product-name">
            { title }
          </p>
          <span>
            { price }
          </span>
          <p data-testid="shopping-cart-product-quantity">
            { quantidade }
          </p>
          <p>
            { valueTotal }
          </p>
          <button
            data-testid="product-increase-quantity"
            type="submit"
            onClick={ () => { increment(obj); } }
          >
            Aumentar quantidade
          </button>
          <button
            type="submit"
            data-testid="product-decrease-quantity"
            onClick={ () => { decrement(obj); } }
          >
            Diminuir quantidade
          </button>
          <button type="submit">X</button>
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
