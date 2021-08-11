<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import ProductsList from "../components/ProductsList";
import { getProductsFromCategoryAndQuery } from "../services/api";
import ProductDetails from './ProductDetails'
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import ProductsList from '../components/ProductsList';
import { getProductsFromCategoryAndQuery } from '../services/api';

>>>>>>> d7a7dcc5d78245839f96d68d052021f2c8303038
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      selectedCategory: "",
      products: "noSearchAlready",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ searchText: target.value });
  };

  handleRadioButton = async ({ target }) => {
    // this.setState({ selectedCategory: target.value });
    const data = await getProductsFromCategoryAndQuery(target.value);
    this.setState({ products: data.results });
  };

  handleSearchButton = () => {
    this.setState({ products: "Carregando..." }, async () => {
      const { selectedCategory, searchText } = this.state;
      const data = await getProductsFromCategoryAndQuery(
        selectedCategory,
        searchText,
      );
      await this.setState({ products: data.results });
    });
  };

  render() {
<<<<<<< HEAD
    const { searchText, products, selectedCategory } = this.state;
=======
    const { searchText, products } = this.state;
    const { getProductData } = this.props;
>>>>>>> d7a7dcc5d78245839f96d68d052021f2c8303038
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          searchText={searchText}
          handleSearchButton={this.handleSearchButton}
        />
<<<<<<< HEAD
        <Link to="/shoppingKart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <Category handleRadioButton={this.handleRadioButton} />
        <ProductsList products={products} />
=======
        <Link to="/shoppingKart" data-testid="shopping-cart-button">Carrinho</Link>
        <Category handleRadioButton={ this.handleRadioButton } />
        <ProductsList products={ products } getProductData={ getProductData } />
>>>>>>> d7a7dcc5d78245839f96d68d052021f2c8303038
      </div>
    );
  }
}

Home.propTypes = {
  getProductData: PropTypes.func,
}.isRequerid;

export default Home;
