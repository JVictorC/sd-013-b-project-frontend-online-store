import React, { Component } from 'react';
import CardProduct from './CardProduct';

export default class Home extends Component {
  render() {
    const {
      products,
      state,
      addToCart,
    } = this.props;
    return (
      <div className="product-area">
        {products === 0 && state === true
          ? <p>Nenhum produto foi encontrado</p>
          : products.map((product, { id }) => (
            <CardProduct
              key={ id }
              products={ product }
              addToCart={ addToCart }
            />
          ))}
      </div>
    );
  }
}
