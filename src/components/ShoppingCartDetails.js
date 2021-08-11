import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';
import * as api from '../services/api';

class ShoppingCartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { categoryId, query } } } = this.props;
    await api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => {
        this.setState({ product: response.results[0] });
      });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    console.log(product);
    return (
      <div>

        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>
        <Link to="/" className="back-button">Voltar</Link>
        <div>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <h2>{ `Preço: R$${price}` }</h2>
          <img alt="Product" src={ thumbnail } />
        </div>
      </div>
    );
  }
}

ShoppingCartDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ShoppingCartDetails;
