import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };

    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const decodeId = decodeURI(id); // Implementação do decodeURI segundo documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/decodeURI

    const products = await getProductsFromCategoryAndQuery('', decodeId);
    const productDetail = products.results.find((product) => product.title === id);

    this.setState(() => ({
      product: productDetail,
    }));
  }

  render() {
    const { product } = this.state;
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
        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </button>
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
