import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardItems extends React.Component {
  render() {
    const { item } = this.props;
    const { handleAddToCart } = this.props;

    const { shipping } = item;

    return (
      <div data-testid="product">
        <h4>{ item.title }</h4>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          { item.price }
        </p>
        { (shipping.free_shipping === true)
          ? <p data-testid="free-shipping">Frete Grátis</p> : '' }
        <Link
          to={ { pathname: `/product/${item.id}`, item } }
          data-testid="product-detail-link"
        >
          Details
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => handleAddToCart(item) }
          type="button"
        >
          Add To Cart
        </button>
      </div>
    );
  }
}

CardItems.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  item: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  free_shipping: PropTypes.bool,
}.isRequired;

CardItems.defaultProps = {
  item: [],
};
