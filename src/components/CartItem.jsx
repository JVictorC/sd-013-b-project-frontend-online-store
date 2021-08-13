import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const { onClick, title, thumbnail, quantity, price, id } = this.props;

    return (
      <div className="cart-items">
        <button type="submit">Retirar</button>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">
          {title}
        </p>
        <button
          type="submit"
          data-testid="product-decrease-quantity"
          id={ `${id}-product-decrease-quantity` }
          onClick={ onClick }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        <button
          type="submit"
          data-testid="product-increase-quantity"
          id={ `${id}-product-increase-quantity` }
          onClick={ onClick }
        >
          +
        </button>
        <p>{Math.round(price * quantity)}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
