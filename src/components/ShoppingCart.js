import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from './ShoppingCartIcon';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  increaseQuantity() {
    const { location: { state } } = this.props;
    const { quantity } = state[0];
    console.log(quantity);
  }

  render() {
    const { location: { state } } = this.props;
    return (
      <div>
        <ShoppingCartIcon />
        { state.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : state.map(({ id, title, thumbnail, quantity }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.increaseQuantity }
              >
                +
              </button>
            </div>
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
