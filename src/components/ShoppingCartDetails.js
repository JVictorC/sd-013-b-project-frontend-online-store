import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ShoppingCartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    this.catchProduct = this.catchProduct.bind(this);
  }

  componentDidMount() {
    this.catchProduct();
  }

  catchProduct = async () => {
    const product = await getProductsFromCategoryAndQuery();
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    console.log(product);
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>
        <Link to="/" className="back-button">Voltar</Link>
      </div>

    );
  }
}

ShoppingCartDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default ShoppingCartDetails;
