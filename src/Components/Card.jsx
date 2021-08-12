import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;
export default class Card extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleCartClick = this.handleCartClick.bind(this);
  // }

  // handleCartClick() {
  //   this.setState({
  //     object,
  //   });
  // }

  render() {
    const { thumbnail, title, price, id, object } = this.props;
    const number = 1;
    return (
      <div data-testid="product" className="product-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt="product" />
        <p>
          R$
          { price }
        </p>
        <Link
          to={ { pathname: `/details/${id}`, state: { object } } }
          data-testid="product-detail-link"
        >
          <p>Ver detalhes</p>
        </Link>
        <Link
          to={ { pathname: '/cart', state: { object, number } } }
          data-testid="product-add-to-cart"
        >
          <p>Adicionar ao carrinho</p>
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
