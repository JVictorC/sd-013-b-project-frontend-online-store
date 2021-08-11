import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { location: { state: { products } } } = this.props;
    this.state = {
      products,
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{products.title}</h1>
        <img src={ products.thumbnail } alt="" />
        <p>{products.price}</p>
        <Link to="/shop">Shopping Cart</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      products: PropTypes.string,
    }),
  }).isRequired,
};
export default ProductDetails;
