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

  render() {
    const { filterText, products } = this.state;
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
        </label>
        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/shoppingcart"
          >
            Carrinho
          </Link>
          <Categories handleClick={ this.handleClick } />
        </div>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
