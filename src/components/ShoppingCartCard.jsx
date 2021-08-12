import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartCard extends React.Component {
  constructor(props) {
    super(props);
    const { quantity } = this.props;
    this.state = {
      amount: quantity,
    };
  }

  increase = () => {
    const { amount } = this.state;
    this.setState({ amount: amount + 1 });
  };

  decrease = () => {
    const { amount } = this.state;
    this.setState({ amount: amount > 0 ? amount - 1 : amount });
  };

  /*  removeFromCart = () => {

  } */

  render() {
    const { title } = this.props;
    const { amount } = this.state;

    return (
      <div>
        <button type="button" onClick={ this.removeFromCart }>X</button>
        <span data-testid="shopping-cart-product-name">{title}</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decrease }
        >
          -
        </button>
        <span type="number" data-testid="shopping-cart-product-quantity">
          {amount}
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increase }
        >
          +
        </button>
      </div>
    );
  }
}

ShoppingCartCard.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
