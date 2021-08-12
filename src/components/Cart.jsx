import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  selectedProductToCart(product) {
    console.log(product);
    return product;
  }

  render() {
    const { location } = this.props;

    // const { productToCart } = state;

    console.log(location.state);
    return (
      <div data-testid="shopping-cart-product-name">
        <h2 data-testid="shopping-cart-empty-message">{location.state.title}</h2>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

export default Cart;
