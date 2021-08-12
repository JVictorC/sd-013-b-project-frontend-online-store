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
    const { value } = target;
    if (value < 0) {
      this.setState({ quantity: 0 });
    } else { this.setState({ quantity: value }); }
  }

  handleQuantity({ target }) {
    const { quantity } = this.state;
    let newNumber = quantity;
    if (target.name === 'add') {
      newNumber += 1;
    } else {
      newNumber -= 1;
      if (newNumber < 0) { newNumber = 0; }
    }
    this.setState({ quantity: newNumber });
  }

  render() {
    const { quantity } = this.state;
    const { item } = this.props;
    const { title, price } = item;
    return (
      <li>
        <p data-testid="shopping-cart-product-name">
          { `${title}, R$${price}` }
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          name="add"
          onClick={ this.handleQuantity }
        >
          +
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          name="sub"
          onClick={ this.handleQuantity }
        >
          -
        </button>
        <p>
          { `Final Price: R$${price * quantity}` }
        </p>
      </li>
    );
  }
}

CartItems.propTypes = {
  item: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
