import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { card, increase, decrease } = this.props;
    return (
      <div className="cart">
        {
          card.length === 0
            ? (
              <h1 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            )
            : <h1>Seu carrinho</h1>
        }
        {
          card.map(({ title, price, thumbnail, id, quantity }) => (
            <div key={ id }>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>
                <button
                  onClick={ decrease }
                  type="button"
                  data-testid="product-decrease-quantity"
                  id={ id }
                >
                  ➖
                </button>
                { price }
                <button
                  onClick={ increase }
                  type="button"
                  data-testid="product-increase-quantity"
                  id={ id }
                >
                  ➕
                </button>
              </p>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  card: PropTypes.arrayOf(String).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};
