import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <section>
        <div className="card">
          <p data-testid="product-detail-name">{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{ product.price }</p>
          <Link to='/shoppingcart' >adicionar ao carrinho</Link>
        </div>
      </section>
    );
  }
}
