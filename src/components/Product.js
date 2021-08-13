import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { obj, onClick } = this.props;
    const { title, thumbnail, price, id } = obj;
    const details = { pathname: `/details/${id}`,
      state: { title, thumbnail, price },
    };
    return (
      <section className="product" data-testid="product">
        <Link data-testid="product-detail-link" to={ details }>Detalhes</Link>
        <div>
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <span>{ price }</span>
        </div>
        <div>
          <button
            type="submit"
            data-testid="product-add-to-cart"
            onClick={ () => { onClick(obj); } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </section>
    );
  }
}
Product.propTypes = {

  obj: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
