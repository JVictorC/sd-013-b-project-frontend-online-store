import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EvaluationForm from './EvaluationForm';
import '../css/DetailedProduct.css';
import CounterCart from './CounterCart';

export default class DetailedProduct extends React.Component {
  render() {
    const { item, getQuery, query } = this.props;
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
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Link to="/">Voltar</Link>
        <div className="div-class-count">
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <ShoppingCartIcon style={ { color: '#22ba24' } } fontSize="large" />
          </Link>
          <CounterCart query={ query } />
        </div>
      </div>
    );
  }
}

DetailedProduct.propTypes = {
  // item: PropTypes.shape({
  //   title: PropTypes.string,
  //   price: PropTypes.number,
  //   thumbnail: PropTypes.string,
  // }).isRequired,
  item: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  ]).isRequired,
  getQuery: PropTypes.func.isRequired,
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
};
