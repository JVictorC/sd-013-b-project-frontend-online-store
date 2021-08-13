// Componente feito para o Requisito 2 - realizado em grupo,
// com todos os membros participando.

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../css/SearchBar.css';
import CategoryList from './CategoryList';
import CounterCart from './CounterCart';

export default class SearchBar extends React.Component {
  render() {
    const {
      onChange, value, handleClick, categoryClick, query, itemQuantity } = this.props;
    return (
      <div>
        <div className="input-container">
          <input
            onChange={ onChange }
            value={ value }
            type="text"
            className="div-input"
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ handleClick }
            data-testid="query-button"
          >
            Pesquisar
          </button>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <ShoppingCartIcon style={ { color: '#22ba24' } } fontSize="large" />
          </Link>
          {/* <p data-testid="shopping-cart-size">{query.length}</p> */}
          <CounterCart query={ query } itemQuantity={ itemQuantity } />
        </div>
        <p data-testid="home-initial-message" className="title">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList categoryClick={ categoryClick } />
      </div>
    );
  }
}

SearchBar.defaultProps = {
  itemQuantity: {},
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  categoryClick: PropTypes.func.isRequired,
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
  itemQuantity: PropTypes.objectOf(PropTypes.number),
};
