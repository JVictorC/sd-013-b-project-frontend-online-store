import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnAddToCart from './BtnAddToCart';

export default class CardRender extends React.Component {
  render() {
    const { results } = this.props;
    const { title, price, category_id: categoryId, thumbnail } = results;
    const query = title.replace(/ /g,"+");
    return (
      <div>
        <img alt="imagem" src={ thumbnail } data-testid="product" />
        <div>
          <h4>{ title }</h4>
          <p>{ price }</p>
          <Link
            to={ `/product/${categoryId}/${query}` }
            data-testid="product-detail-link"
          >
            VER DETALHES
          </Link>
          <BtnAddToCart categoryId={ categoryId } query={ query } />
        </div>
      </div>
    );
  }
}

CardRender.propTypes = {
  results: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
