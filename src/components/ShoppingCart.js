import React from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;

    return (
      <div>
        <ShoppingCartIcon />
        { state.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : state.map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p>{ price }</p>
            </div>
          ))}
      </div>
    );
  }
}

export default ShoppingCart;
