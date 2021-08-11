import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartCards extends React.Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <div>
        {cartProducts.map((product) => (
          <div key={ product.id }>
            <h4 data-testid="shopping-cart-product-name">{ product.title }</h4>
            <p>Quantidade:</p>
            <p data-testid="shopping-cart-product-quantity">{ product.quant }</p>
            <p>
              Price:
              { product.price }
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCartCards.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCartCards;
