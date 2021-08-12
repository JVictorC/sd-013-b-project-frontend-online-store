import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderProducts extends Component {
  render() {
    const { products } = this.props;
    const noReturn = <span>Nenhum produto foi encontrado</span>;
    return (
      products === [] ? noReturn : (
        <div>
          {products.map(({ id, title, thumbnail, price }) => (
            <div key={ id } data-testid="product">
              <p>{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </div>
          ))}
        </div>
      )
    );
  }
}

RenderProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default RenderProducts;
