import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import homeIcon from '../img/homeIcon.png';

class ShoppingKart extends Component {
  render() {
    const { cart } = this.props;
    if (!cart.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <Link to="/">
          <img
            src={ homeIcon }
            alt="Voltar para página principal"
          />
        </Link>
      </div>
    );
  }
}

export default ShoppingKart;
