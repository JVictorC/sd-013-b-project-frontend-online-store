import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import ProductInvalid from './ProductInvalid';

export default class SearchBar extends Component {
  render() {
    const { searchbar,
      products,
      state,
      handleClick,
      handleChange,
      callback,
      cart } = this.props;

    return (
      <div>
        <label
          htmlFor="home-initial-message"
          data-testid="home-initial-message"
        >
          <input
            type="text"
            data-testid="query-input"
            id="home-initial-message"
            name="searchbar"
            value={ searchbar }
            onChange={ handleChange }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <br />
        </label>
        <button type="button" data-testid="query-button" onClick={ handleClick }>
          Pesquisar
        </button>
        {products.length === 0 && state === true ? (
          <ProductInvalid />
        ) : (
          <ProductList
            callback={ callback }
            products={ products }
            searchbar={ searchbar }
            cart={ cart }
          />
        )}
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchbar: PropTypes.string.isRequired,
  products: PropTypes.objectOf.isRequired,
  state: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf.isRequired,
};
