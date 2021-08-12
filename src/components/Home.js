import React from 'react';
import { Link } from 'react-router-dom';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ShoppingCartIcon from './ShoppingCartIcon';
import ProductList from './ProductList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchBar: '',
      productList: [],
      cartItems: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCategories = this.handleClickCategories.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange(event) {
    this.setState({
      searchBar: event.target.value,
    });
  }

  async handleClick() {
    const { searchBar } = this.state;
    const productList = await getProductsFromCategoryAndQuery('', searchBar);
    const productsInfo = productList.results;
    this.setState({
      productList: productsInfo,
    });
  }

  async handleClickCategories(event) {
    const categoryId = event.target.value;
    const getCategoryId = await getProductsFromCategoryAndQuery(categoryId, ' ');
    const categoriesResult = getCategoryId.results;
    this.setState({
      productList: categoriesResult,
    });
  }

  // setShoppingCart(product) {
  //   const { id, title, thumbnail, price } = product;
  //   const pegaProdutos = { id, title, thumbnail, price, quantity: 1 };
  //   this.setState((state) => ({
  //     productInCart: [...state.productInCart, pegaProdutos],
  //   }));
  // }

  addToCart(product) {
    const { id, title, thumbnail, price } = product;
    const newItem = { id, title, thumbnail, price, quantity: 1 };
    this.setState((previousState) => ({
      cartItems: [...previousState.cartItems, newItem],
    }));
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, productList, cartItems } = this.state;
    return (
      <div>
        <Link
          to={ {
            pathname: '/shopping-cart',
            state: cartItems,
          } }
          data-testid="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>

        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h3>
        <div>
          <p>Categorias:</p>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <label
                htmlFor="categorie"
                name="categorie"
                key={ categorie.id }
              >
                <input
                  data-testid="category"
                  value={ categorie.id }
                  type="radio"
                  name="categorie"
                  onClick={ this.handleClickCategories }
                />
                { categorie.name }
              </label>
            </li>
          ))}
        </div>
        <ProductList
          addToCart={ this.addToCart }
          productList={ productList }
        />
      </div>
    );
  }
}

export default Home;
