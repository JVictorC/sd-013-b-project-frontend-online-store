import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, thumbnail, price, id,
      shipping: { free_shipping: freeShip, }
    } = this.props;
    const details = { pathname: `/details/${id}`,
      state: { title, thumbnail, price },
    };
    return (
      <section className="product" data-testid="product">
        <Link data-testid="product-detail-link" to={ details }>Detalhes</Link>
        <div>
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <span>{ price }</span>
        </div>
        <div>
          <span data-testid={ freeShip ? 'free-shipping' : '' }>
            { freeShip ? 'FRETE GRÁTIS!' : '' }
          </span>
        </div>
      </section>
    );
  }
}
Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
};
export default Product;
