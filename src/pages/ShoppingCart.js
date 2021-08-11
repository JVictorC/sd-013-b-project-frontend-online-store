import React from 'react';

class ShoppingCart extends React.Component {
  renderProducts() {
    const { cart, onSubClick, onAddClick } = this.props;
    return cart.map((product) => (
      <div key={ product.id }>
        <div>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div>{ product.title }</div>
        <div>
          <button data-testid="product-decrease-quantity" type="button" onClick={ () => onSubClick(product.id) }>-</button>
          <button data-testid="product-increase-quantity" type="button" onClick={ () => onAddClick(product.id) }>+</button>
          { product.quantity }
        </div>
        <div>{ product.price }</div>
        <div>{ product.price * product.quantity }</div>
      </div>
    ));
  }

  render() {
    const { cart } = this.props;
    const emptyCart = <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    return (
      <div>
        {cart.length > 0 ? this.renderProducts() : emptyCart}
      </div>
    );
  }
}

export default ShoppingCart;
