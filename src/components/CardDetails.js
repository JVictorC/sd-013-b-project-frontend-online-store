import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CardDetails extends Component {
  render() {
    const { location } = this.props;
    const { title, thumbnail, price } = location.item;
    return (
      <section className="card-detail">
        <div>
          <img
            src={ thumbnail }
            alt="Product Appearence"
            className="product-detail-image"
          />
          <p data-testid="product-detail-name" className="product-detail-name">
            { title }
          </p>
          <p className="product-detail-price">
            { price }
          </p>
        </div>
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
};
