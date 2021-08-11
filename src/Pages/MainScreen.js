import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import RadioButtons from '../Components/RadioButtons';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      id: 0,
      query: '',
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    // this.fetchProducts();
  }

  handleInputChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async handleRadioButton({ target }) {
    this.setState({
      id: target.id,
    });

    const getResponse = await getProductsFromCategoryAndQuery(target.id);
    this.setState({
      products: getResponse,
    });
  }

  handleClick() {
    this.fetchProducts();
  }

  // pega as categorias
  async fetchCategories() {
    const getResponse = await getCategories();
    this.setState({
      categories: getResponse,
    });
  }

  // pega os produtos
  async fetchProducts() {
    const { id, query } = this.state;
    const getResponse = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      products: getResponse,
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            type="text"
            name="searchBar"
            data-testid="query-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          id="searchButton"
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link
          to="/ShoppCart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <RadioButtons categories={ categories } onClick={ this.handleRadioButton } />
        {products.results === undefined
          ? <div> sem produtos </div> : <ProductList products={ products } /> }

      </div>
    );
  }
}

export default MainScreen;
