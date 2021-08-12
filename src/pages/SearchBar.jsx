import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Componentes/ProductList';
import HomeFilter from '../Componentes/HomeFilter';
import { getProductsFromCategoryAndQuery } from '../services/api';
import '../App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    this.setState({
      searchText: text,
    });
  }

  async handleClick() {
    const { searchText } = this.state;
    const object = await getProductsFromCategoryAndQuery(null, searchText);
    const products = object.results;
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="search-bar">
          <input data-testid="query-input" type="text" onChange={ this.handleChange } />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
        <Link to="ShoppingCart" data-testid="shopping-cart-button">
          <button type="button" className="cart-button">Cart</button>
        </Link>
        <HomeFilter />
        <ProductList
          products={ products }
        />
      </div>
    );
  }
}

export default SearchBar;
