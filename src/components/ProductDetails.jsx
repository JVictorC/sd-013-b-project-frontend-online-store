import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      product: [],
      idProduct: id,
    };
    this.cathProductID = this.cathProductID.bind(this);
  }

  componentDidMount() {
    this.cathProductID();
    this.getCartStorage();
  }

  getCartStorage = () => {
    const items = localStorage.getItem('cart');
    if (items) {
      return JSON.parse(items);
    }
    return [];
  }

  handleLocalStorage = () => {
    const { product } = this.state;
    const items = this.getCartStorage();
    const wholeItems = [...items, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(wholeItems));
  }

  async cathProductID() {
    const { idProduct } = this.state;
    const response = await fetch(
      `https://api.mercadolibre.com/items/${idProduct}`,
    );
    const result = await response.json();
    this.setState(() => ({
      product: result,
    }));
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    console.log(product);
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleLocalStorage }
        >
          Add to cart
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
