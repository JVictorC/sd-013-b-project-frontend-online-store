import React, { Component } from 'react';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      thumbnail: '',
    };
    this.productsRequisition = this.productsRequisition.bind(this);
  }

  componentDidMount() {
    this.productsRequisition();
  }

  async productsRequisition() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const product = await response.json();
    this.setState({
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    });
    console.log(product);
  }

  render() {
    const { title, price, thumbnail } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <span>{price}</span>
        <img src={ thumbnail } alt="product.png" />
      </div>
    );
  }
}
