import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { productList } = this.props;

    return (
      <div>
        {/* requisito passou, precisamos apenas verificar esta condição.
        Já inicia mostrando a mensagem de produto não encontrado. */}
        {productList.length === 0 ? <p>Nenhum produto encontrado</p>
          : productList.map((product) => (
            <div data-testid="product-detail-link" key={ product.id }>
              <Link
                data-testid="product-detail-link"
                to="/product-detail"
              >
                <div data-testid="product">
                  <p data-testid="product-detail-name">{ product.title }</p>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <p>{ product.price }</p>
                </div>

              </Link>
            </div>
          ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
