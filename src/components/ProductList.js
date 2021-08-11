import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  render() {
    const { productList, addToCart } = this.props;

    return (
      <div>
        {/* requisito passou, precisamos apenas verificar esta condição.
        Já inicia mostrando a mensagem de produto não encontrado. */}
        { productList.length === 0 ? <p>Nenhum produto encontrado</p>
          : productList.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => addToCart(product) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;