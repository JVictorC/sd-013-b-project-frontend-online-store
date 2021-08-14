import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import SearchBar from './SearchBar';
import ProductArea from './ProductArea';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
      categories: [],
      state: false,
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    const { searchText } = this.state;
    // const itemId = event.target.id;
    const filterCategoryId = await
    api.getProductsFromCategoryAndQuery(event.target.id, searchText);
    this.setState({
      products: filterCategoryId.results,
      state: true,
    });
  }

  async fetchCategories() {
    const fetchApi = await api.getCategories();
    this.setState({
      categories: fetchApi,
    });
  }

  render() {
    const { cart, addToCart } = this.props;
    const { searchText, products, categories, state } = this.state;
    console.log(products);
    return (
      <div>
        <div>
          <SearchBar
            // addToCart={ addToCart }
            cart={ cart }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
            searchText={ searchText }
            // products={ products }
            // state={ state }
          />
        </div>
        <div className="body">
          <Categories
            addToCart={ addToCart }
            cart={ cart }
            categories={ categories }
            products={ products }
            handleClick={ this.handleClick }
          />
          <ProductArea
            products={ products }
            state={ state }
            addToCart={ addToCart }
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.array).isRequired,
};
