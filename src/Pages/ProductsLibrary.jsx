import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CategoriesList from '../Components/CategoriesList';
import SearchBar from '../Components/SearchBar';
import CartButton from '../Components/CartButton';

export default class ProductsLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchbar: '',
      category: [],
      products: [],
      state: false,
      cart: [],
    };

    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCartState = this.handleCartState.bind(this);
  }

  componentDidMount() {
    this.handleState();
  }

  handleCartState(basicInfo) {
    this.setState(({ cart }) => ({
      cart: [...cart, basicInfo],
    }));
  }

  async handleState() {
    const categories = await getCategories();
    this.setState({
      category: categories,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleClick(event) {
    const { searchbar } = this.state;
    const itemId = event.target.id;
    const productList = await getProductsFromCategoryAndQuery(itemId, searchbar);
    this.setState({
      products: productList.results,
      state: true,
    });
  }

  render() {
    const { searchbar, products, state, category, cart } = this.state;
    return (
      <div>
        <CategoriesList
          category={ category }
          products={ products }
          handleClick={ this.handleClick }
        />
        <SearchBar
          callback={ this.handleCartState }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          searchbar={ searchbar }
          products={ products }
          state={ state }
        />
        <CartButton cart={ cart } />
      </div>
    );
  }
}
