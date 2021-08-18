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
        <header>
          <div>
            <div className="title">
              <h1>Mercado Organizado</h1>
              <h3 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h3>
            </div>
            <div className="inputCamp">
              <input
                data-testid="query-input"
                type="text"
                onChange={ this.handleChange }
              />
              <button
                data-testid="query-button"
                type="button"
                onClick={ this.handleClick }
              >
                Pesquisar
              </button>
            </div>
          </div>
          <div className="carrinho">
            <Link to="shoppingcart" data-testid="shopping-cart-button">
              <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v2.png" alt="" />
            </Link>
            <p className="numberCart">{localStorage.length}</p>
          </div>
        </header>
        <div>
          <HomeFilter />
          <ProductList
            products={ products }
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
