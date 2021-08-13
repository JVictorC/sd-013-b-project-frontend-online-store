import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      categoryId: '',
      products: [],
      cart: [],
    };
  }

  handleChange = (event) => {
    this.setState({ filterText: event.target.value });
  }

  handleClick = (event) => {
    this.setState({
      categoryId: event.target.id,
    },
    () => {
      this.getProducts();
    });
  }

  async getProducts() {
    const { categoryId, filterText } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, filterText);
    this.setState({
      products: products.results,
    });
  }

  buttonClick = () => {
    this.getProducts();
  }

  addToCart = (title, thumbnail, price, id) => {
    const cartItem = {
      title,
      thumbnail,
      price,
      id,
    };
    this.setState((prevState) => ({
      cart: [...prevState.cart, cartItem],
    }));
    // const { cart } = this.state;
    // localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { filterText, products, cart } = this.state;
    localStorage.setItem('cart', JSON.stringify(cart));

    return (
      <div className="App">
        <label htmlFor="input-search" data-testid="home-initial-message">
          <input
            data-testid="query-input"
            type="text"
            name="search"
            id="input-search"
            value={ filterText }
            onChange={ this.handleChange }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.buttonClick }
          >
            pesquisar
          </button>
          <br />
          <Link
            data-testid="shopping-cart-button"
            to="/shoppingcart"
          >
            Carrinho
          </Link>
          <Categories handleClick={ this.handleClick } />
        </label>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              addToCart={ this.addToCart }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
