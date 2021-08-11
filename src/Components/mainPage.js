import React from 'react';

import { Link } from 'react-router-dom';
import ListaCat from './ListaCat';
import ListItems from './ListItems';
import { getProductsFromCategoryAndQuery } from '../services/api';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
    };
  }

  getId = async ({ target }) => {
    const catId = target.id;
    const productsList = await getProductsFromCategoryAndQuery(catId);
    this.setState({
      productsList: productsList.results,
    });
  }

  searchItems = async (param) => {
    const searchList = await getProductsFromCategoryAndQuery('', param);
    this.setState({
      productsList: searchList.results,
    });
  }

  render() {
    const { productsList } = this.state;
    return (
      <div className="search">
        <ListItems
          productsList={ productsList }
          searchItems={ this.searchItems }
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>

        <ListaCat getId={ this.getId } />
      </div>
    );
  }
}

export default MainPage;
