import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { products } = this.props;

    if (products.length > 0) {
      return (
        <div>
          { products.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <p>{ product.price }</p>
              <img src={ product.thumbnail } alt="" />
              <p>
                Quantidade:
                <span
                  data-testid="shopping-cart-product-quantity"
                >
                  {product.quantity}
                </span>
              </p>
            </div>
          )) }
        </div>
      );
    }

    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default Cart;
