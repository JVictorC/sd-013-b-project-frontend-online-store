import React from 'react';

class ShoppCart extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems.length > 0) {
      return (<div key="1" data-testid="shopping-cart-empty-message">
        {cartItems.map((item) => {
          const product = JSON.parse(item);
          const { title, thumbnail, price } = product;
          return (
            <div key={ item.id } data-testid="product" className="productCard">
              <h3 data-testid="shopping-cart-product-name" className="title">
                { title }
              </h3>
              <img src={ thumbnail } alt="test" className="thumbnail" />
              <h4 className="price">
                {`R$ ${price}` }
              </h4>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          );
        })}
      </div>);
    }
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default ShoppCart;
