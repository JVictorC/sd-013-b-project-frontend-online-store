import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products, onClick } = this.props;

    if (products === undefined) {
      return (
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      );
    }
    if (products.length === 0) {
      return (
        <h2>Nenhum produto foi encontrado.</h2>
      );
    }

    return (
      <section>
        {products.map((obj) => (
          <Product onClick={ onClick } key={ obj.id } obj={ obj } />
        ))}
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default ProductList;
