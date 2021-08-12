import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  mapProduct(product) {
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
        <h5>{`R$ ${product.price}`}</h5>
        <h5 data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${product.quantidade}`}
        </h5>
      </div>
    );
  }

  render() {
    console.log(this.props);
    const { location } = this.props;
    const { state } = location;

    if (state && state.length > 0) {
      return (
        <div className="product-in-cart">
          {state.map((product) => this.mapProduct(product))}
        </div>
      );
    }
    return (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>);
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.oneOfType(PropTypes.object, PropTypes.string),
  }).isRequired,
};

export default Cart;
