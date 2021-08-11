import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import BarSearch from './BarSearch';
import Category from './Category';
import ProductList from './ProductList';

class Home extends Component {
  constructor(props) {
    super(props);
    const { card } = this.props;
    this.state = {
      products: [],
      categorySelect: undefined,
      card,
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToCard = this.addToCard.bind(this);
  }

  async handleClick({ target }) {
    const response = await getProductsFromCategoryAndQuery(
      target.id,
      null,
      true,
    );

    const { results } = await response;

    this.setState({
      categorySelect: target.id,
      products: results,
    });
  }

  async getProducts(searchText) {
    const { categorySelect } = this.state;
    const items = await getProductsFromCategoryAndQuery(
      categorySelect,
      searchText,
    ).then((result) => result.results);
    this.setState({ products: items });
  }

  async addToCard({ title, price, thumbnail, id }) {
    const { getCardItem } = this.props;
    const newItem = { title, price, thumbnail, id };
    newItem.quantity = 1;
    this.setState((prevState) => ({ card: [...prevState.card, newItem] }), () => {
      getCardItem(newItem);
    });
  }

  render() {
    const { products } = this.state;
    const { getDetailsProduct, QuantityItemCard } = this.props;
    return (
      <>
        <header>
          <BarSearch getProducts={ this.getProducts } />
          <Link data-testid="shopping-cart-button" to="cart/">
            Cart
            <p data-testid="shopping-cart-size">{QuantityItemCard}</p>
          </Link>
        </header>
        <main>
          <Category handleClick={ this.handleClick } />
          <ProductList
            products={ products }
            addToCard={ this.addToCard }
            getDetailsProduct={ getDetailsProduct }
          />
        </main>
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  getCardItem: PropTypes.func.isRequired,
  getDetailsProduct: PropTypes.func.isRequired,
  QuantityItemCard: PropTypes.number.isRequired,
  card: PropTypes.arrayOf(PropTypes.string).isRequired,
};
