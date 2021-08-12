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
      cartItems: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClickAddCart = this.handleClickAddCart.bind(this);
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

  handleClickAddCart(id, title, thumbnail, price) {
    const newCartItem = {
      id,
      title,
      thumbnail,
      price,
    };

    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, newCartItem],
    }));
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
    const { query, products, cartItems } = this.state;

    const message = (
      <p
        className="initial-message"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>);

    return (
      <div className="root">
        <div className="header">
          <SearchBar
            query={ query }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
          <Link to={ { pathname: '/shopping-cart', state: { cartItems } } }>
            <img
              data-testid="shopping-cart-button"
              className="icons"
              src={ shoppingCart }
              alt="Shopping cart icon"
            />
          </Link>
        </div>

        <div className="main-content">
          <CategoriesAside handleCategory={ this.handleCategory } />

          {/* Uso de operador lógico && em substituição do if */}
          {products.length !== 0 && (
            <RenderProducts
              products={ products }
              handleClickAddCart={ this.handleClickAddCart }
            />
          )}
          {products.length === 0 && message }
        </div>

      </div>
    );
  }
}

export default Home;
