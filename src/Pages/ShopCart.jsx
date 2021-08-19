import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonHome from '../Components/ButtonHome';
import './pageStyles.css';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class ShopCart extends Component {
  createCart = () => {
    const { cartProducts, handleClick } = this.props;
    return (
      cartProducts.map((product) => (
        <div className="cart-product" key={ product.id }>
          <button
            className="remove-button"
            type="button"
            onClick={ this.handleRemove }
          >
            <span>X</span>
          </button>
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <img src={ product.thumbnail } alt="Produto" />
          <p>
            Preço: R$
            { product.price }
          </p>
          <span className="cart-product-infos">
            <p data-testid="shopping-cart-product-quantity">
              Quantidade:
              {' '}
              { product.quantityCount }
            </p>
            <div className="cart-product-infos-child">
              <p>
                Total:
                {' '}
                {product.price * product.quantityCount}
              </p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => handleClick(product, '') }
              >
                -
              </button>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => handleClick(product, 'plus') }
              >
                +
              </button>
            </div>
          </span>
        </div>
      ))
    );
  }

  render() {
    const { cartProducts } = this.props;
    const emptyCart = (
      <div>
        <p>Seu carrinho está vazio</p>
      </div>
    );
    return (
      <div data-testid="shopping-cart-empty-message">
        <div className="cart-navbar">
          <div className="cart-navbar-links">
            <ButtonHome />
            <Link
              to="/checkout"
              data-testid="checkout-products"
            >
              PAGAMENTO
            </Link>
          </div>

        </div>
        <div className="cart">
          { cartProducts.length === 0 ? emptyCart : this.createCart()}
        </div>
      </div>
    );
  }
}

ShopCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
