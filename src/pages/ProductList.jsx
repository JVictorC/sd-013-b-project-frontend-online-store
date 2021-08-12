import React from 'react';
import PropTypes from 'prop-types';
import CategoriesList from '../components/CategoriesList';
import ProductCard from '../components/ProductCard';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      results: [],
      didSearch: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  handleClick() {
    const { text } = this.state;
    const value = text;
    getProductsFromCategoryAndQuery('', value).then((response) => {
      this.setState({
        results: response.results,
        didSearch: true,
      });
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    if (value === '') {
      this.setState({
        didSearch: false,
      });
    }
  }

  handleFilter(id, name) {
    const { text } = this.state;
    getProductsFromCategoryAndQuery(id, text || name).then((response) => {
      this.setState({
        results: response.results,
        didSearch: true,
      });
      console.log(id, text);
      console.log(response);
    });
  }

  addHandler(product) {
    const { onAdd } = this.props;
    onAdd(product);
  }

  render() {
    const { text, results, didSearch } = this.state;
    return (
      <div className="main-container">
        <CategoriesList onFilter={ this.handleFilter } />
        <section>
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
            name="text"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Search
          </button>
          <ShoppingCartButton />
          { text === '' && results.length === 0 && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
          {
            text !== '' && results.length === 0 && didSearch && (
              <p>
                Nenhum produto foi encontrado.
              </p>
            )
          }
        </section>
        <section>
          <ul>
            { results.length !== 0 && (
              results.map((result) => (
                <li
                  data-testid="product"
                  key={ result.id }
                >
                  <ProductCard product={ result } onAdd={ this.addHandler } />
                </li>
              ))
            ) }
          </ul>
        </section>
      </div>
    );
  }
}

ProductList.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ProductList;
