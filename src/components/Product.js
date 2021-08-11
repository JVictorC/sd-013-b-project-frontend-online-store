import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <section className="product" data-testid="product">
        <div>
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <span>{ price }</span>
        </div>
      </section>
    );
  }
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
