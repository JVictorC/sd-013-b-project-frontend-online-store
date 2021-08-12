import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormComment from './FormComment';
import Comment from './Comment';

export default class CardDetails extends Component {
  render() {
    const { location, AddToCart } = this.props;
    const { item } = location;
    const { title, thumbnail, price, shipping } = item;
    return (
      <section className="card-detail">
        <div>
          <img
            src={ thumbnail }
            alt="Product appearence"
            className="product-detail-image"
          />
          <p data-testid="product-detail-name" className="product-detail-name">
            { title }
          </p>
          <p className="product-detail-price">
            { price }
          </p>
          { (shipping.free_shipping === true)
            ? <p data-testid="free-shipping">Frete Grátis</p> : '' }
          <button
            data-testid="product-detail-add-to-cart"
            onClick={ () => AddToCart(item) }
            type="button"
          >
            Add to Cart!
          </button>
        </div>
        <FormComment location={ location.item } />
        <Comment location={ location.item } />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          Cart
        </Link>
        <Link to="/" className="back-button">Voltar</Link>
      </section>
    );
  }
}

CardDetails.propTypes = {
  location: PropTypes.objectOf({
    item: PropTypes.objectOf({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  AddToCart: PropTypes.func.isRequired,
};
