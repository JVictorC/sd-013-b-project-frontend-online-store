import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItems extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  handleChange({ target }) {
    if (target.value < 0) {
      this.setState({ quantity: 0 });
    } else { this.setState({ quantity: target.value }); }
  }

  handleQuantity(number) {
    const { quantity } = this.state;
    let newNumber = quantity + parseInt(number);
    if (newNumber < 0) { newNumber = 0; }
    this.setState({ quantity: newNumber });
  }

  render() {
    const { item } = this.props;
    const { id, title, price } = item;
    return (
      <li>
        <p data-testid="shopping-cart-product-name">
          { `${title}, R$${price}` }
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleQuantity(1, id) }
        >
          +
        </button>
        <input
          data-testid="shopping-cart-product-quantity"
          onChange={ this.handleChange(id) }
        />
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleQuantity('-1', id) }
        >
          -
        </button>
      </li>
    );
  }
}

CartItems.propTypes = {
  item: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
