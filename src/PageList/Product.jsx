import React from 'react';
import UserReview from '../Components/FormAvaliation';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart({ target: { id } }) {
    const { cartStateUpadte, products } = this.props;
    const foundProduct = products.find(({ id: producId }) => producId === id);
    cartStateUpadte(foundProduct);
  }

  render() {
    const { products, match: { params: { id: idParam } } } = this.props;
    const findedProduct = products.find(({ id: idProduct }) => idProduct === idParam);
    const { id, title, thumbnail, price } = findedProduct;
    return (
      <div data-testid="product" key={ id }>
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
        </div>
        <img src={ thumbnail } alt={ title } />
        <h2>{`R$ ${price}`}</h2>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          id={ id }
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <UserReview />
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.objectOf(PropTypes.string),
  cartStateUpadte: PropTypes.func,
}.isRequired;
