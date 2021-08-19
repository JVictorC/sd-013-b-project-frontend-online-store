import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  renderProducts() {
    const { cart, onSubClick, onAddClick } = this.props;
    return cart.map((product) => (
      <div key={ product.id } className="cardItems">
        <div>
          <img src={ product.thumbnail } alt={ product.title } width="100vw" />
        </div>
        <div
          data-testid="shopping-cart-product-name"
          className="shoppingCart"
        >
          { product.title }
        </div>
        <div className="shoppingCart">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => onSubClick(product.id) }
            className="button"
          >
            { '<' }
          </button>
          <div
            data-testid="shopping-cart-product-quantity"
            className="quantity"
          >
            { product.quantity }
          </div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => onAddClick(product.id) }
            className="button"
          >
            { '>' }
          </button>
        </div>
        <div className="shoppingCart">{`Preço unt: ${product.price}`}</div>
        <div className="shoppingCart">{`Total: ${product.price * product.quantity}`}</div>
      </div>
    ));
  }

  render() {
    const { cart } = this.props;
    const emptyCart = (
      <h1 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h1>);
    return (
      <div>
        {cart.length > 0 ? (
          <div>
            <h1>Carrinho</h1>
            { this.renderProducts() }
            <Link to="/shopping-cart/checkout-products">
              <button
                type="button"
                data-testid="checkout-products"
              >
                Finalizar compra
              </button>
            </Link>
          </div>
        )
          : emptyCart}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onSubClick: PropTypes.func.isRequired,
};

export default ShoppingCart;
