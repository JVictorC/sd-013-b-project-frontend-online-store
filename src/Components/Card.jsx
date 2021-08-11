import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;
export default class Card extends Component {
  render() {
    const { thumbnail, title, price, id, object } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt="product" />
        <p>{ price }</p>
        <Link
          to={ { pathname: `/details/${id}`, state: { object } } }
          data-testid="product-detail-link"
        >
          <p>Ver detalhes</p>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  object: PropTypes.objectOf(PropTypes.object).isRequired,
};
