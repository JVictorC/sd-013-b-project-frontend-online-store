import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListItems extends React.Component {
  freeShipping() {
    return (
      <span data-testid="free-shipping">Frete Grátis</span>
    );
  }

  render() {
    const { items, getQuery } = this.props;
    return (
      <div>
        { items.length === 0 ? 'Nenhum produto foi encontrado'
          : items.map(({ thumbnail, price, title, id, shipping }, index) => (
            <div key={ id }>
              <Link
                data-testid="product-detail-link"
                to={ { pathname: `/product-details/${id}`, state: { nameTitle: title } } }
              >
                <div data-testid="product">
                  <h3>{ title }</h3>
                  <img src={ thumbnail } alt="Produto" />
                  <p>{ `R$: ${price}` }</p>
                  { shipping.free_shipping && this.freeShipping() }
                </div>
              </Link>
              <button
                type="button"
                onClick={ () => getQuery(items[index]) }
                data-testid="product-add-to-cart"
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))}
      </div>
    );
  }
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getQuery: PropTypes.func,
};

ListItems.defaultProps = {
  getQuery: PropTypes.func,
};

export default ListItems;
