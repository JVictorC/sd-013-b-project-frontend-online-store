import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ShoppingCartButton from '../components/ShoppingCartButton';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
  }

  changeQuantityHandler(e) {
    const { onChangeQuantity } = this.props;
    onChangeQuantity(e);
  }

  render() {
    const { cart } = this.props;
    const finalCart = [];
    cart.forEach((product, index) => {
      let count = product.none ? 0 : 1;
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

    return (
      <div>
        <Link to="/">
          <button type="button">return</button>
        </Link>
        {cart.length > 0 ? (
          finalCart.map((product) => (
            <div id={ product.data.id } key={ product.data.id }>
              <span data-testid="shopping-cart-product-name">
                {product.data.title}
              </span>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ this.changeQuantityHandler }
              >
                -
              </button>
              <b data-testid="shopping-cart-product-quantity">
                {product.quantity}
              </b>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ this.changeQuantityHandler }
              >
                +
              </button>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
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
  onChangeQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
