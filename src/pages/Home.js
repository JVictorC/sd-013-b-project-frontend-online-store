import React from 'react';

import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      searchTerm: '',
      selectedCategory: '',
    };
  }

  handleSearchTermChange = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    });
  };

  handleCategoryChange = ({ target }) => {
    if (target.value) {
      this.listProducts(target.value, '');
    }

    this.setState({
      selectedCategory: target.value,
    });
  };

  listProducts = async (category, query) => {
    const response = await api.getProductsFromCategoryAndQuery(category, query);
    console.log(response.results[0]);

    const list = response.results.map((product) => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      attributes: product.attributes,
      available_quantity: product.available_quantity,
    }));

    this.setState({
      productList: list,
    });
  };

  render() {
    const { searchTerm, productList, selectedCategory } = this.state;

    return (
      <div className="home-page">
        <CategoryList
          selectedCategory={ selectedCategory }
          onChange={ this.handleCategoryChange }
        />
        <div className="main-content">
          <SearchBar
            searchTerm={ searchTerm }
            onChange={ this.handleSearchTermChange }
            onClick={ this.listProducts }
          />
          <ProductList productList={ productList } />
        </div>
      </div>
    );
  }
}

export default Home;
