import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
  }

  addCount() {
    this.setState(({ quantity }) => (
      { quantity: quantity + 1 }
    ));
  }

  subCount() {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState(() => (
        { quantity: quantity - 1 }
      ));
    }
  }

  render() {
    const { quantity } = this.state;
    const { location: { state: { cartItems } } } = this.props;
    const emptyCart = (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>);

    return (
      <div>
        {cartItems.length !== 0 && (
          cartItems.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{`R$${price}`}</p>
              <div>
                <label htmlFor="quantity">
                  Quantidade
                  <input
                    data-testid="shopping-cart-product-quantity"
                    name="quantity"
                    type="text"
                    value={ quantity }
                  />
                </label>
                <button type="button" onClick={ () => this.addCount() }>+</button>
                <button type="button" onClick={ () => this.subCount() }>-</button>
              </div>
            </div>
          ))
        )}
        {cartItems.length === 0 && emptyCart }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartItems: PropTypes.arrayOf(
        PropTypes.object,
      ).isRequired,
    }),
  }).isRequired,
};

export default ShoppingCart;
