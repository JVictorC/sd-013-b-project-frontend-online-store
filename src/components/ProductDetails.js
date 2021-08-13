import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCart from '../assets/shoppingCart.png';
import addCart from '../assets/addCart.png';
import '../App.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      cartItems: [],
    };

    this.fetchProduct = this.fetchProduct.bind(this);
    this.handleClickAddCart = this.handleClickAddCart.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  handleClickAddCart() {
    const { product } = this.state;
    const { id, title, thumbnail, price } = product;

    this.setState({
      cartItems: [{ id, title, thumbnail, price, quantity: 1 }],
    });
  }

  async fetchProduct() {
    const { match: { params: { categoryId, id } } } = this.props;

    const products = await getProductsFromCategoryAndQuery(categoryId, '');
    const productDetail = products.results.find((product) => product.id === id);

    this.setState(() => ({
      product: productDetail,
    }));
  }

  render() {
    const { product, cartItems } = this.state;
    const { title, thumbnail, price, attributes } = product;

    return (
      <div data-testid="product-detail-name">
        {product.length !== 0 && (
          <div>
            <h2>{ title }</h2>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <div>
              {attributes.map(({ id, name, value_name: valueName }) => (
                <div key={ id }>
                  <h4>{ name }</h4>
                  <p>{ valueName }</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.handleClickAddCart() }
        >
          <img
            src={ addCart }
            alt="Add cart icon"
            className="icons"
          />
        </button>

        <Link to={ { pathname: '/shopping-cart', state: { cartItems } } }>
          <img
            data-testid="shopping-cart-button"
            className="icons"
            src={ shoppingCart }
            alt="Shopping cart icon"
          />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
