import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesAside from './CategoriesAside';
import SearchBar from '../pages/SearchBar';
import RenderProducts from './RenderProducts';
import shoppingCart from '../assets/shoppingCart.png';
import '../App.css';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { query } = this.state;

    this.fetchProducts('', query);
  }

  handleCategory({ target }) {
    const { id } = target;

    this.setState({
      query: '',
    });

    this.fetchProducts(id);
  }

  async fetchProducts(categoryId, query) {
    const products = await getProductsFromCategoryAndQuery(categoryId, query);

    this.setState(() => ({
      products: products.results,
    }));
  }

  render() {
    const { query, products } = this.state;

    const message = (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);

    return (
      <div>
        <div>
          <SearchBar
            query={ query }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
        </div>

        <div>
          {/* Uso de operador lógico && em substituição do if */}
          {products.length !== 0 && <RenderProducts products={ products } /> }
          {products.length === 0 && message }
        </div>

        <Link to="/shopping-cart">
          <img
            data-testid="shopping-cart-button"
            className="shopping-cart"
            src={ shoppingCart }
            alt="my image"
          />
        </Link>

        <aside>
          <CategoriesAside handleCategory={ this.handleCategory } />
        </aside>
      </div>
    );
  }
}

export default Home;
