import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
  render() {
    const { products } = this.props;
    return (
      products.map((product, index) => (
        <div key={ index } data-testid="product-add-to-cart">
          <p data-testid="shopping-cart-product-name">{ product.title }</p>
          <p data-testid="shopping-cart-product-quantity">1</p>
        </div>))
    );
  }
}

CartItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartItems;
