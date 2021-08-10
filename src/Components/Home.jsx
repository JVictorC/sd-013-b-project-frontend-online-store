import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import BarSearch from './BarSearch';
import Category from './Category';
import ProductList from './ProductList';

// piru de conflito

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
<<<<<<< HEAD
      card: [],
=======
>>>>>>> 5c7b5f681aaff766b21433ce9094791565e1b174
    };
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts(searchText) {
    const items = await getProductsFromCategoryAndQuery(undefined, searchText)
      .then((result) => result.results);
    this.setState({ products: items });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <header>
          <BarSearch getProducts={ this.getProducts } />
          <Link data-testid="shopping-cart-button" to="cart/">Cart</Link>
        </header>
        <main>
          <Category />
          <ProductList products={ products } />
        </main>
      </>
    );
  }
}

export default Home;
