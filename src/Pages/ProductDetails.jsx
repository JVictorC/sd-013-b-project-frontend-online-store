import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
      thumbnail: '',
      condition: '',
    };
    this.productsRequisition = this.productsRequisition.bind(this);
  }

  componentDidMount() {
    this.productsRequisition();
  }

  async productsRequisition() {
    const { match: { params: { categoryId, id, query } } } = this.props;
    const response = await api.getProductsFromCategoryAndQuery(categoryId, query);
    const products = response.results;
    const productSearched = products.find((product) => product.id === id);
    console.log(productSearched);
    this.setState({
      title: productSearched.title,
      price: productSearched.price,
      thumbnail: productSearched.thumbnail,
      condition: productSearched.condition,
    });
  }

  render() {
    const { title, price, thumbnail, condition } = this.state;
    return (
      <div data-testid="product-detail-name">
        <h3>{title}</h3>
        <span>{`Preço: R$${price.toFixed(2)}`}</span>
        <img src={ thumbnail } alt="product.png" />
        <p>{`Condição: ${condition}`}</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
    categoryId: PropTypes.string,
    id: PropTypes.string,
    query: PropTypes.string,
  }).isRequired,
};
