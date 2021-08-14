import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  render() {
    const { location: { data } } = this.props;
    const cartRendering = data.map((product) => (
      <div key={ product.id }>
        <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
        <h5>{product.price}</h5>
      </div>
    ));
    const em = <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>;
    return (
      <div>
        {data.length === 0 ? em : cartRendering}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
