import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { obj, onClick } = this.props
    const {  title, thumbnail, price } = obj;
    return (
      <section data-testid="product">
        <div>
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <span>{ price }</span>
        </div>
        <div>
          <button data-testid="product-add-to-cart" onClick={ () => { onClick(obj) } }>Adicionar ao Carrinho</button>
        </div>
      </section>
    );
  }
}
Product.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Product;
