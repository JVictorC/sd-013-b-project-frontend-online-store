import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RenderProducts extends Component {
  render() {
    const { products } = this.props;
    const noReturn = <span>Nenhum produto foi encontrado</span>;
    return (
      products === [] ? noReturn : (
        <div>
          {products.map(({ id, category_id: categoryId, title, thumbnail, price }) => (
            <div key={ id } data-testid="product">
              <p>{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
              <Link
                to={ `${categoryId}/${id}` }
                data-testid="product-detail-link"
              >
                Ver Detalhes
              </Link>
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
