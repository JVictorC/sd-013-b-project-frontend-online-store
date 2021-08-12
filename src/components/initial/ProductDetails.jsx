import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCart: [],
      product: '',
    };
  }

  addToCart = (addProduct) => {
    const { productsCart } = this.state;
    productsCart.push(addProduct.product);
    console.log(productsCart);
    this.setState({ productsCart });
  };

  thisProduct = () => {
    const { location: { state: product } } = this.props;
    this.setState({ product });
  }

  render() {
    const { productsCart, product } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { input } = params;
    if (!product) this.thisProduct();
    return (
      <>
        <Link
          to={ { pathname: '/shop', state: { productsCart } } }
          data-testid="shopping-cart-button"
        >
          Carrinho de compras com
          <span>{` ${productsCart.length} `}</span>
          itens
        </Link>
        <h1 data-testid="product-detail-name">{input}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      input: PropTypes.string,
      category: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.objectOf(PropTypes.string),
    }),
  }).isRequired,
};
export default ProductDetails;
