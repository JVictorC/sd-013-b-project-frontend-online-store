import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    const finalCart = [];
    console.log(cart);
    cart.forEach((product, index) => {
      let count = 1;
      cart.forEach((product2, index2) => {
        if (product.id === product2.id && index !== index2) {
          count += 1;
        }
      });
      const findProduct = finalCart.find((el) => el.data.id === product.id);
      if (Math.abs(findProduct) === 1 || findProduct === undefined) {
        finalCart.push({
          data: product,
          quantity: count,
        });
      }
    });
    console.log(finalCart);
    return (
      <div>
        <ShoppingCartButton />
        {
          cart.length > 0 ? (
            finalCart.map((product) => (
              <div key={ product.data.id }>
                <span data-testid="shopping-cart-product-name">
                  { product.data.title }
                </span>
                <b data-testid="shopping-cart-product-quantity">{ product.quantity }</b>
              </div>
            ))
          ) : (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ShoppingCart;
