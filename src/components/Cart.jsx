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

    console.log(location);
    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">productId</h2>
      </div>
    );
  }
}

export default Cart;
