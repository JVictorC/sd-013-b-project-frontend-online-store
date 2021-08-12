import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from './ShoppingCartIcon';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;
    return (
      <div>
        <ShoppingCartIcon />
        { state.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : state.map(({ id, title, thumbnail }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default ShoppingCart;
