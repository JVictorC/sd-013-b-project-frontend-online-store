import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EvaluationForm from './EvaluationForm';

export default class DetailedProduct extends React.Component {
  render() {
    const { item, getQuery } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="produto detalhado" />
        <p>{`R$: ${price}`}</p>
        <span>
          <EvaluationForm />
        </span>
        <button
          type="button"
          onClick={ () => getQuery(item) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

DetailedProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
