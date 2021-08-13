import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  async addToCard(item) {
    const { title, price, thumbnail, id, available_quantity: availableQtd } = item;
    const { getCardItem } = this.props;
    const { card } = this.state;
    const checkExist = card.find((product) => product.id === id);
    if (!checkExist) {
      const newItem = { title, price, thumbnail, id, availableQtd };
      newItem.quantity = 1;
      this.setState((prevState) => ({ card: [...prevState.card, newItem] }), () => {
        getCardItem(newItem);
      });
    } else if (availableQtd > checkExist.quantity) {
      checkExist.quantity += 1;
    }
  }

  render() {
    const { products, card } = this.state;
    const { getDetailsProduct, QuantityItemCard } = this.props;
    return (
      <div className="grid-container">
        <BarSearch
          getProducts={ this.getProducts }
          QuantityItemCard={ QuantityItemCard }
        />
        <main className="Product-Show">
          <Category handleClick={ this.handleClick } />
          <ProductList
            products={ products }
            addToCard={ this.addToCard }
            getDetailsProduct={ getDetailsProduct }
            card={ card }
          />
        </main>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  getCardItem: PropTypes.func.isRequired,
  getDetailsProduct: PropTypes.func.isRequired,
  QuantityItemCard: PropTypes.number.isRequired,
  card: PropTypes.arrayOf(PropTypes.object).isRequired,
};
