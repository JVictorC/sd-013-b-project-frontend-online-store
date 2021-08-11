import React, { Component } from 'react';
import * as api from '../services/api';
import CardProduct from './CardProduct';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
      done: false,
      products: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  handleClick = ({ target }) => {
    // const { categoryId } = this.state;
    this.fetchProduct();
    this.setState({
      category: target.id,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProduct() {
    const { category, searchText } = this.state;
    const fetchApi = await api.getProductsFromCategoryAndQuery(category, searchText);
    this.setState({
      products: fetchApi.results,
      done: true,
    });
  }

  render() {
    const { products, searchText, done } = this.state;
    // console.log(results);
    // if (done) return 'Nenhum produto foi encontrado';
    return (
      <div>
        <form>
          <label htmlFor="pesquisar">
            <input
              type="text"
              name="searchText"
              onChange={ this.handleChange }
              value={ searchText }
              id="pesquisar"
              data-testid="query-input"
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </label>
        </form>
        <div>
          {done
            ? products.map((product, { id }) => (
              <CardProduct
                key={ id }
                products={ product }
              />))
            : <p>Nenhum produto foi encontrado</p>}
        </div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}
