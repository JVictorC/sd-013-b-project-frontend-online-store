import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../Components/CartButton';
import ButtonHome from '../Components/ButtonHome';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;
export default class CardDetails extends Component {
  render() {
    const { location: { state: { object } } } = this.props;
    const { title, thumbnail, price } = object;
    const number = 1;
    return (
      <div>
        <ButtonHome />
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt="Produto" />
        <p>
          Preço: R$
          { price }
        </p>
        <Link
          to={ { pathname: '/cart', state: { object, number } } }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </Link>
        <CartButton />
      </div>
    );
  }
}

CardDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};
