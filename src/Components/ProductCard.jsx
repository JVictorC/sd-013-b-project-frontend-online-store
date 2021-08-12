import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const selectProduct = event.target.parentElement.previousElementSibling.innerText;
    console.log(selectProduct);
    // const resolve = await fetch(`https://api.mercadolibre.com/items/${id}`);
    // const data = await resolve.json();
    // const ol = document.querySelector('ol');
    // const creatItem = createCartItemElement(data);
    // ol.appendChild(creatItem);
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product" className="produto">
        <div>
          <h2>{ title }</h2>
          <h4>{ price }</h4>
          <img alt="Product disc" src={ thumbnail } />
        </div>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.handleClick }
            id="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
