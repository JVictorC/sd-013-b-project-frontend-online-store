import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const { onClick, title, thumbnail, quantity, price } = this.props;

    return (
      <div className="cart-items">
        <button type="submit">Retirar</button>
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <button
          type="submit"
          data-testid="product-decrease-quantity"
          id="product-decrease-quantity"
          onClick={ onClick }
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="submit"
          data-testid="product-increase-quantity"
          id="product-increase-quantity"
          onClick={ onClick }
        >
          +
        </button>
        <p>{price}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
