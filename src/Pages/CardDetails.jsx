import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../Components/ButtonCart';
import ButtonHome from '../Components/ButtonHome';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;
export default class CardDetails extends Component {
  render() {
    const {
      location: { state: { product } }, handleCartItems, cartQuantity } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <div className="product-details-home-button">
          <ButtonHome />
        </div>
        <div className="card-details-page">
          <div className="card-details-container">
            <p data-testid="product-detail-name">{title}</p>
            <img src={ thumbnail } alt="Produto" />
            <p>
              Preço: R$
              { price }
            </p>
            <div className="card-details-links">
              <ButtonCart
                data-testid="product-detail-add-to-cart"
                product={ product }
                productDetail="productDetail"
                handleCartItems={ handleCartItems }
              />
              <Link data-testid="shopping-cart-button" to="/shopCart">
                Ver carrinho
              </Link>
            </div>
            <div className="shopping-cart-size-container">
              <p data-testid="shopping-cart-size">
                Quantidade:
                {' '}
                { cartQuantity }
              </p>
            </div>
          </div>
          <div className="rate-product-container">
            <h1>Avalie o produto</h1>
            <form action="">
              <div>
                <label htmlFor="email">
                  Email:
                  <input type="text" name="" id="email" />
                </label>
              </div>
              <p>Avaliação:</p>
              <label htmlFor="evaluation">
                <input type="radio" name="evaluation" id="" />
                1
              </label>
              <label htmlFor="evaluation">
                <input type="radio" name="evaluation" id="" />
                2
              </label>
              <label htmlFor="evaluation">
                <input type="radio" name="evaluation" id="" />
                3
              </label>
              <label htmlFor="evaluation">
                <input type="radio" name="evaluation" id="" />
                4
              </label>
              <label htmlFor="evaluation">
                <input type="radio" name="evaluation" id="" />
                5
              </label>
              <textarea data-testid="product-detail-evaluation" cols="30" rows="10" placeholder="Faça um comentário" />
              <div>
                <button type="button">Avaliar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CardDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  handleCartItems: PropTypes.func.isRequired,
  cartQuantity: PropTypes.number.isRequired,
};
