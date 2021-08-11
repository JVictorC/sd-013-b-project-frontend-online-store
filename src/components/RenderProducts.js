import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class RenderProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.renderProducts = this.renderProducts.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { query = '', categoryId = '' } = this.props;
    let products;

    if (query !== '') {
      products = await getProductsFromCategoryAndQuery(false, query);
    }

    if (categoryId !== '') {
      products = await getProductsFromCategoryAndQuery(categoryId, false);
    }

    this.setState(() => ({
      products: products.results,
    }));
  }

  renderProducts() {
    const { products } = this.state;

    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { products } = this.state;
    const noReturn = <span>Nenhum produto foi encontrado</span>;
    return (
      <div>
        {(products.length > 0) ? this.renderProducts() : noReturn }
      </div>
    );
  }
}

RenderProducts.propTypes = {
  query: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default RenderProducts;
