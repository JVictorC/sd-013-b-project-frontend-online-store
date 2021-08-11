import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
import ProductInvalid from './ProductInvalid';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchbar: '',
      products: [],
      state: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleClick() {
    const { searchbar } = this.state;
    const { firstquery } = this.props;
    const productList = await getProductsFromCategoryAndQuery(firstquery, searchbar);
    this.setState({
      products: productList.results,
      state: true,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { searchbar, products, state } = this.state;
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
            onChange={ this.handleChange }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <br />
        </label>
        <button type="button" data-testid="query-button" onClick={ this.handleClick }>
          Pesquisar
        </button>
        {products.length === 0 && state === true ? (
          <ProductInvalid />
        ) : (
          <ProductList products={ products } />
        )}
      </div>
    );
  }
}

SearchBar.propTypes = {
  firstquery: PropTypes.string.isRequired,
};
