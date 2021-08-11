import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { thumbnail, title, price, id } = this.props;
    return (
      <Link to={ `/details/${id}` }>
        <div data-testid="product">
          <p>{ title }</p>
          <img src={ thumbnail } alt="product" />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
